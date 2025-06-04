"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { TestResult } from "@/components/test-result"

const originalQuestions = [
  {
    id: 1,
    text: "Prefiro ter liberdade para tomar minhas próprias decisões no trabalho 🚀",
    anchor: "autonomy",
  },
  {
    id: 2,
    text: "Valorizo muito a estabilidade do emprego e segurança financeira 🔒",
    anchor: "security",
  },
  {
    id: 3,
    text: "Prefiro trabalhar em projetos que exigem conhecimento técnico especializado 🎯",
    anchor: "technical",
  },
  {
    id: 4,
    text: "Gosto de liderar equipes e coordenar pessoas e projetos 👥",
    anchor: "managerial",
  },
  {
    id: 5,
    text: "Tenho interesse em criar meu próprio negócio ou inovar 💡",
    anchor: "entrepreneurial",
  },
  {
    id: 6,
    text: "É importante para mim contribuir para causas sociais ou ambientais ⭐",
    anchor: "service",
  },
  {
    id: 7,
    text: "Busco constantemente desafios que testem minhas habilidades 🏆",
    anchor: "challenge",
  },
  {
    id: 8,
    text: "Valorizo o equilíbrio entre vida profissional e pessoal ⚖️",
    anchor: "lifestyle",
  },
  {
    id: 9,
    text: "Prefiro ser reconhecido como especialista na minha área 🎯",
    anchor: "technical",
  },
  {
    id: 10,
    text: "Me sinto confortável assumindo responsabilidades de gestão 📊",
    anchor: "managerial",
  },
  {
    id: 11,
    text: "Trabalhar em casa ou ter horários flexíveis é muito importante 🚀",
    anchor: "autonomy",
  },
  {
    id: 12,
    text: "Prefiro empresas grandes e estabelecidas com benefícios sólidos 🏢",
    anchor: "security",
  },
  {
    id: 13,
    text: "Gosto de criar soluções inovadoras para problemas complexos 💡",
    anchor: "entrepreneurial",
  },
  {
    id: 14,
    text: "Prefiro trabalhar em projetos que tenham impacto social positivo ⭐",
    anchor: "service",
  },
  {
    id: 15,
    text: "Busco oportunidades que me permitam aprender constantemente 🏆",
    anchor: "challenge",
  },
]

const scaleLabels = ["Discordo Totalmente", "Discordo", "Concordo", "Concordo Totalmente"]

// Função para embaralhar array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function TestPage() {
  const [questions, setQuestions] = useState<typeof originalQuestions>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResult, setShowResult] = useState(false)

  // Embaralhar perguntas quando o componente for montado
  useEffect(() => {
    const shuffledQuestions = shuffleArray(originalQuestions)
    setQuestions(shuffledQuestions)
  }, [])

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResult()
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateResult = () => {
    setShowResult(true)
  }

  // Função para reiniciar o teste com nova ordem aleatória
  const restartTest = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResult(false)
    // Embaralhar novamente as perguntas
    const shuffledQuestions = shuffleArray(originalQuestions)
    setQuestions(shuffledQuestions)
  }

  // Se as perguntas ainda não foram embaralhadas, mostrar loading
  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Preparando seu teste... 🎯</p>
        </div>
      </div>
    )
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const currentQ = questions[currentQuestion]
  const hasAnswer = answers[currentQ.id] !== undefined

  if (showResult) {
    return <TestResult answers={answers} questions={originalQuestions} onRestartTest={restartTest} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Início
          </Link>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <CardTitle className="text-2xl font-bold text-gray-900">Teste de Âncoras de Carreira 🎯</CardTitle>
              <span className="text-sm text-gray-500">
                {currentQuestion + 1} de {questions.length}
              </span>
            </div>
            <Progress value={progress} className="w-full" />
          </CardHeader>

          <CardContent className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">{currentQ.text}</h3>

              <RadioGroup
                value={answers[currentQ.id]?.toString() || ""}
                onValueChange={(value) => handleAnswer(currentQ.id, Number.parseInt(value))}
                className="space-y-4"
              >
                {scaleLabels.map((label, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <RadioGroupItem value={(index + 1).toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      <span className="font-medium">{index + 1}</span> - {label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className="flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Anterior
              </Button>

              <Button
                onClick={nextQuestion}
                disabled={!hasAnswer}
                className="flex items-center bg-emerald-600 hover:bg-emerald-700"
              >
                {currentQuestion === questions.length - 1 ? "Ver Resultado" : "Próxima"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-gray-600">💡 Responda com sinceridade para obter o melhor resultado!</p>
          <p className="text-sm text-gray-500 mt-2">🔀 As perguntas são apresentadas em ordem aleatória</p>
        </div>
      </div>
    </div>
  )
}
