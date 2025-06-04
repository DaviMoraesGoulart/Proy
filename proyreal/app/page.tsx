"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Target, Users, Lightbulb, Shield, Rocket, Star, Heart } from "lucide-react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const anchors = [
    {
      icon: <Rocket className="h-8 w-8 text-emerald-600" />,
      title: "Autonomia e Independência",
      description: "Valorizar a liberdade de decisão e capacidade de tomar iniciativa 🚀",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Segurança e Estabilidade",
      description: "Priorizar a estabilidade do emprego e segurança financeira 🔒",
    },
    {
      icon: <Target className="h-8 w-8 text-emerald-600" />,
      title: "Competência Técnica-Funcional",
      description: "Buscar a excelência e aprofundamento em uma área específica 🎯",
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-700" />,
      title: "Competência Administrativa Geral",
      description: "Valorizar a capacidade de gerenciar e coordenar pessoas e projetos 👥",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-emerald-600" />,
      title: "Criatividade Empreendedora",
      description: "Buscar a inovação e desenvolvimento de novos projetos ou negócios 💡",
    },
    {
      icon: <Star className="h-8 w-8 text-emerald-600" />,
      title: "Dedicação a uma Causa",
      description: "Priorizar o trabalho com propósito e contribuição para a sociedade ⭐",
    },
    {
      icon: <Target className="h-8 w-8 text-emerald-700" />,
      title: "Desafio Puro",
      description: "Buscar a realização pessoal e superação de desafios 🏆",
    },
    {
      icon: <Heart className="h-8 w-8 text-emerald-600" />,
      title: "Estilo de Vida",
      description: "Valorizar o equilíbrio entre a vida profissional e pessoal ⚖️",
    },
  ]

  const motivationalQuotes = [
    "🌟 'Escolha um trabalho que você ama e não terá que trabalhar um dia sequer na vida.'",
    "🚀 'O futuro pertence àqueles que acreditam na beleza de seus sonhos.'",
    "💪 'Sucesso é a soma de pequenos esforços repetidos dia após dia.'",
    "🎯 'Sua carreira é uma jornada, não um destino.'",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-8 inline-block shadow-2xl mb-6 logo-glow">
                <Image src="/logo.png" alt="PROY Logo" width={200} height={200} className="mx-auto animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">PROY</h1>
              <p className="text-xl md:text-2xl mb-8 text-emerald-100">
                Professional You - Descubra Sua Âncora de Carreira
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">Encontre Seu Caminho Profissional! 🌟</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Não sabe que carreira seguir? Nosso teste baseado nas âncoras de carreira vai te ajudar a descobrir qual
              profissão combina mais com você! ✨
            </p>

            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link href="/teste">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-3">
                  Fazer Teste Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/sobre">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-3">
                  Saiba Mais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Motivational Quotes */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frases Inspiradoras 💫</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {motivationalQuotes.map((quote, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6 text-center">
                  <p className="text-lg text-gray-700 italic">{quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Anchors Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">As 8 Âncoras de Carreira 🎯</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvidas por Edgar Schein, as âncoras de carreira representam os valores, necessidades e talentos que
              guiam suas escolhas profissionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {anchors.map((anchor, index) => (
              <Card
                key={index}
                className={`card-hover ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{anchor.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{anchor.title}</h3>
                  <p className="text-gray-600">{anchor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Descobrir Sua Âncora? 🚀</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Faça nosso teste de 15 perguntas e descubra qual âncora de carreira define melhor seu perfil profissional!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/teste">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                Começar Teste Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/carreiras">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                Ver Todas as Carreiras
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
