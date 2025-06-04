"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Share2, RotateCcw } from "lucide-react"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface TestResultProps {
  answers: Record<number, number>
  questions: Array<{
    id: number
    text: string
    anchor: string
  }>
  onRestartTest: () => void
}

const anchorData = {
  autonomy: {
    name: "Autonomia e Independência",
    description: "Você valoriza a liberdade de decisão e a capacidade de tomar iniciativa 🚀",
    professions: [
      {
        name: "Freelancer/Consultor",
        salary: "R$ 5.000 - R$ 20.000",
        education: "Área de especialização",
        courses: "Marketing Digital, Gestão de Tempo",
        description: "Trabalha de forma independente para diversos clientes",
      },
      {
        name: "Empreendedor Digital",
        salary: "Variável (R$ 3.000 - R$ 50.000+)",
        education: "Administração, Marketing",
        courses: "E-commerce, Marketing Digital, Vendas",
        description: "Cria e gerencia negócios online com autonomia total",
      },
      {
        name: "Escritor/Jornalista",
        salary: "R$ 3.000 - R$ 12.000",
        education: "Jornalismo, Letras",
        courses: "Redação, SEO, Marketing de Conteúdo",
        description: "Cria conteúdo com liberdade criativa e horários flexíveis",
      },
    ],
  },
  security: {
    name: "Segurança e Estabilidade",
    description: "Você prioriza a estabilidade do emprego e a segurança financeira 🔒",
    professions: [
      {
        name: "Servidor Público",
        salary: "R$ 5.000 - R$ 15.000",
        education: "Ensino Superior (área específica)",
        courses: "Direito Administrativo, Gestão Pública",
        description: "Trabalha em órgãos governamentais com estabilidade garantida",
      },
      {
        name: "Contador",
        salary: "R$ 4.000 - R$ 12.000",
        education: "Ciências Contábeis",
        courses: "Contabilidade, Auditoria, Tributos",
        description: "Gerencia finanças com demanda constante no mercado",
      },
      {
        name: "Professor Concursado",
        salary: "R$ 4.000 - R$ 12.000",
        education: "Licenciatura + Concurso",
        courses: "Pedagogia, Metodologia, Didática",
        description: "Ensina com estabilidade e benefícios garantidos",
      },
    ],
  },
  technical: {
    name: "Competência Técnica-Funcional",
    description: "Você busca a excelência e aprofundamento em uma área específica 🎯",
    professions: [
      {
        name: "Engenheiro de Software",
        salary: "R$ 8.000 - R$ 18.000",
        education: "Ciência da Computação, Engenharia",
        courses: "Programação, Algoritmos, Cloud Computing",
        description: "Desenvolve sistemas complexos com expertise técnica avançada",
      },
      {
        name: "Médico Especialista",
        salary: "R$ 12.000 - R$ 30.000",
        education: "Medicina + Residência",
        courses: "Especialização médica, Pesquisa clínica",
        description: "Especialista em área específica da medicina",
      },
      {
        name: "Cientista de Dados",
        salary: "R$ 10.000 - R$ 20.000",
        education: "Estatística, Matemática, Computação",
        courses: "Machine Learning, Python, Big Data",
        description: "Analisa dados complexos para insights estratégicos",
      },
    ],
  },
  managerial: {
    name: "Competência Administrativa Geral",
    description: "Você valoriza a capacidade de gerenciar e coordenar pessoas e projetos 👥",
    professions: [
      {
        name: "Gerente de Projetos",
        salary: "R$ 8.000 - R$ 18.000",
        education: "Administração, Engenharia",
        courses: "Gestão de Projetos, Liderança, Agile",
        description: "Coordena equipes e recursos para entregar resultados",
      },
      {
        name: "Diretor de Recursos Humanos",
        salary: "R$ 15.000 - R$ 35.000",
        education: "Psicologia, Administração",
        courses: "Gestão de Pessoas, Coaching, Liderança",
        description: "Lidera estratégias de desenvolvimento organizacional",
      },
      {
        name: "Coordenador de Operações",
        salary: "R$ 7.000 - R$ 15.000",
        education: "Administração, Engenharia",
        courses: "Gestão de Operações, Lean, Six Sigma",
        description: "Otimiza processos e coordena atividades operacionais",
      },
    ],
  },
  entrepreneurial: {
    name: "Criatividade Empreendedora",
    description: "Você busca a inovação e o desenvolvimento de novos projetos ou negócios 💡",
    professions: [
      {
        name: "Fundador de Startup",
        salary: "Variável (R$ 0 - R$ 100.000+)",
        education: "Administração, área específica",
        courses: "Empreendedorismo, Pitch, Lean Startup",
        description: "Cria soluções inovadoras e constrói novos negócios",
      },
      {
        name: "Product Manager",
        salary: "R$ 10.000 - R$ 25.000",
        education: "Administração, Engenharia, Design",
        courses: "Product Management, UX, Analytics",
        description: "Desenvolve produtos inovadores para o mercado",
      },
      {
        name: "Diretor de Inovação",
        salary: "R$ 15.000 - R$ 30.000",
        education: "MBA, Engenharia, Administração",
        courses: "Inovação, Design Thinking, Estratégia",
        description: "Lidera iniciativas de inovação em organizações",
      },
    ],
  },
  service: {
    name: "Dedicação a uma Causa",
    description: "Você prioriza o trabalho com propósito e a contribuição para a sociedade ⭐",
    professions: [
      {
        name: "Psicólogo Social",
        salary: "R$ 4.000 - R$ 12.000",
        education: "Psicologia",
        courses: "Psicologia Social, Terapias, Coaching",
        description: "Ajuda comunidades e indivíduos em situação de vulnerabilidade",
      },
      {
        name: "Gestor de ONGs",
        salary: "R$ 4.000 - R$ 12.000",
        education: "Administração, Serviço Social",
        courses: "Gestão de Projetos Sociais, Captação de Recursos",
        description: "Lidera organizações focadas em impacto social positivo",
      },
      {
        name: "Educador Social",
        salary: "R$ 3.000 - R$ 8.000",
        education: "Pedagogia, Serviço Social",
        courses: "Educação Social, Direitos Humanos",
        description: "Desenvolve programas educacionais para transformação social",
      },
    ],
  },
  challenge: {
    name: "Desafio Puro",
    description: "Você busca a realização pessoal e a superação de desafios 🏆",
    professions: [
      {
        name: "Consultor Estratégico",
        salary: "R$ 12.000 - R$ 30.000",
        education: "MBA, Administração, Engenharia",
        courses: "Estratégia, Análise de Negócios, Problem Solving",
        description: "Resolve problemas complexos em diferentes organizações",
      },
      {
        name: "Trader/Analista Financeiro",
        salary: "R$ 8.000 - R$ 50.000+",
        education: "Economia, Administração, Matemática",
        courses: "Análise Técnica, Mercado Financeiro, Risk Management",
        description: "Navega mercados voláteis e toma decisões de alto risco",
      },
      {
        name: "Pesquisador/Cientista",
        salary: "R$ 6.000 - R$ 15.000",
        education: "Mestrado/Doutorado na área",
        courses: "Metodologia de Pesquisa, Estatística, Publicação Científica",
        description: "Investiga problemas complexos e busca soluções inovadoras",
      },
    ],
  },
  lifestyle: {
    name: "Estilo de Vida",
    description: "Você valoriza o equilíbrio entre a vida profissional e pessoal ⚖️",
    professions: [
      {
        name: "Designer UX/UI",
        salary: "R$ 6.000 - R$ 15.000",
        education: "Design, Sistemas de Informação",
        courses: "UX/UI Design, Prototipagem, User Research",
        description: "Cria experiências digitais com flexibilidade de horários",
      },
      {
        name: "Tradutor/Intérprete",
        salary: "R$ 4.000 - R$ 12.000",
        education: "Letras, Tradução",
        courses: "Idiomas, Tradução Técnica, Interpretação",
        description: "Trabalha com idiomas mantendo flexibilidade de local e horário",
      },
      {
        name: "Coach/Mentor",
        salary: "R$ 5.000 - R$ 15.000",
        education: "Psicologia, Administração + Certificação",
        courses: "Coaching, PNL, Desenvolvimento Pessoal",
        description: "Ajuda pessoas a alcançar objetivos com horários flexíveis",
      },
    ],
  },
}

export function TestResult({ answers, questions, onRestartTest }: TestResultProps) {
  const [showShareDialog, setShowShareDialog] = useState(false)

  const calculateScores = () => {
    const anchorScores = {
      autonomy: 0,
      security: 0,
      technical: 0,
      managerial: 0,
      entrepreneurial: 0,
      service: 0,
      challenge: 0,
      lifestyle: 0,
    }

    questions.forEach((question) => {
      const answer = answers[question.id] || 0
      anchorScores[question.anchor as keyof typeof anchorScores] += answer
    })

    // Removido o fator de aleatoriedade - agora o resultado é determinístico
    return anchorScores
  }

  const scores = calculateScores()

  // Ordenar as âncoras por pontuação (do maior para o menor)
  const sortedAnchors = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([key, value]) => ({
      key,
      name: anchorData[key as keyof typeof anchorData].name,
      score: value, // Mostrar pontuação exata
    }))

  const dominantAnchor = sortedAnchors[0].key as keyof typeof anchorData
  const result = anchorData[dominantAnchor]

  const downloadResult = () => {
    const resultText = `
PROY - Resultado do Teste de Âncoras de Carreira

Sua Âncora Dominante: ${result.name} (${sortedAnchors[0].score} pontos)
${result.description}

Todas as suas pontuações:
${sortedAnchors.map((anchor) => `- ${anchorData[anchor.key as keyof typeof anchorData].name}: ${anchor.score} pontos`).join("\n")}

Profissões Recomendadas:
${result.professions
  .map(
    (prof) => `
• ${prof.name}
  Salário: ${prof.salary}
  Formação: ${prof.education}
  Cursos: ${prof.courses}
  Descrição: ${prof.description}
`,
  )
  .join("")}

Acesse: proy.com.br para mais informações!
    `

    const blob = new Blob([resultText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "resultado-ancora-carreira.txt"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Seu Resultado! 🎉</h1>
          <p className="text-xl text-gray-600">Descobrimos sua âncora de carreira dominante</p>
        </div>

        <Card className="shadow-xl mb-8">
          <CardHeader className="text-center bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-t-lg">
            <CardTitle className="text-3xl font-bold mb-2">{result.name}</CardTitle>
            <p className="text-xl opacity-90">{result.description}</p>
          </CardHeader>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Suas pontuações em cada âncora:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sortedAnchors.map((anchor) => (
                <div
                  key={anchor.key}
                  className={`p-3 rounded-lg border ${anchor.key === dominantAnchor ? "border-emerald-500 bg-emerald-50" : "border-gray-200"}`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{anchor.name}</span>
                    <Badge variant={anchor.key === dominantAnchor ? "default" : "outline"}>{anchor.score} pontos</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {result.professions.map((profession, index) => (
            <Card key={index} className="shadow-lg card-hover">
              <CardHeader>
                <CardTitle className="text-xl text-emerald-600">{profession.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      💰 Salário
                    </Badge>
                    <p className="text-sm">{profession.salary}</p>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      🎓 Formação
                    </Badge>
                    <p className="text-sm">{profession.education}</p>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      📚 Cursos
                    </Badge>
                    <p className="text-sm">{profession.courses}</p>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      📝 Descrição
                    </Badge>
                    <p className="text-sm">{profession.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button onClick={downloadResult} className="bg-emerald-600 hover:bg-emerald-700">
            <Download className="h-4 w-4 mr-2" />
            Baixar Resultado
          </Button>

          <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Compartilhar
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Compartilhe seu resultado! 📱</DialogTitle>
              </DialogHeader>
              <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-2">{result.name}</h3>
                <p className="mb-2">{result.description}</p>
                <div className="mt-4 mb-3 border-t border-white/30 pt-3">
                  <p className="font-bold">Pontuação: {sortedAnchors[0].score} pontos</p>
                </div>
                <div className="mt-3 text-sm">
                  <p className="font-bold mb-1">Profissões recomendadas:</p>
                  <ul className="list-disc list-inside text-left">
                    {result.professions.map((prof, idx) => (
                      <li key={idx}>{prof.name}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs mt-4 opacity-90">Teste feito no PROY 🎯</p>
              </div>
              <p className="text-sm text-gray-600 text-center">📸 Tire uma foto desta tela para compartilhar!</p>
            </DialogContent>
          </Dialog>

          <Button onClick={onRestartTest} variant="outline">
            <RotateCcw className="h-4 w-4 mr-2" />
            Fazer Novamente
          </Button>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">🌟 Parabéns por descobrir sua âncora de carreira!</p>
          <div className="flex justify-center gap-4">
            <Link href="/" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Voltar ao Início
            </Link>
            <Link href="/carreiras" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Ver Todas as Carreiras
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
