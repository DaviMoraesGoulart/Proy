import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Heart, Users, Lightbulb } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-emerald-600" />,
      title: "Orientação Profissional",
      description: "Ajudamos você a descobrir qual carreira combina com seu perfil 🎯",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Feito com Amor",
      description: "Desenvolvido com carinho para ajudar pessoas como você ❤️",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Para Todos",
      description: "Estudantes, profissionais em transição, qualquer pessoa! 👥",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-600" />,
      title: "Baseado em Ciência",
      description: "Fundamentado na teoria de Edgar Schein sobre âncoras de carreira 💡",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <Image src="/logo.png" alt="PROY Logo" width={100} height={100} className="mx-auto mb-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sobre o PROY 🌟</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional You - Sua jornada para descobrir o caminho profissional ideal começa aqui!
          </p>
        </div>

        {/* Mission Section */}
        <Card className="shadow-xl mb-12">
          <CardHeader className="text-center bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-t-lg">
            <CardTitle className="text-3xl font-bold">Nossa Missão 🚀</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                O PROY foi criado para ajudar pessoas que estão perdidas em suas escolhas profissionais. Sabemos como é
                difícil decidir que carreira seguir, especialmente quando há tantas opções disponíveis! 😰
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Nosso objetivo é simples: <strong>ajudar você a encontrar seu futuro profissional</strong>
                através de um teste científico baseado nas âncoras de carreira de Edgar Schein. ✨
              </p>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <p className="text-emerald-800 font-medium text-lg">
                  💫 "Acreditamos que cada pessoa tem um potencial único e merece encontrar uma carreira que a realize
                  profissionalmente e pessoalmente!"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-lg card-hover">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-red-600 flex items-center">😰 O Problema</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li>• Muitos jovens não sabem que carreira escolher</li>
                <li>• Profissionais insatisfeitos querem mudar de área</li>
                <li>• Falta de orientação profissional acessível</li>
                <li>• Decisões baseadas apenas em salário ou pressão social</li>
                <li>• Medo de fazer a escolha "errada"</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-600 flex items-center">✨ Nossa Solução</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li>• Teste científico baseado em pesquisa acadêmica</li>
                <li>• Resultado personalizado com 3 profissões</li>
                <li>• Informações detalhadas sobre cada carreira</li>
                <li>• Totalmente gratuito e acessível</li>
                <li>• Interface amigável e motivadora</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* How it Works */}
        <Card className="shadow-xl mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900">Como Funciona? 🔍</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Responda o Teste</h3>
                <p className="text-gray-600">12 perguntas sobre suas preferências profissionais 📝</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Receba seu Resultado</h3>
                <p className="text-gray-600">Descubra sua âncora de carreira dominante 🎯</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Explore Carreiras</h3>
                <p className="text-gray-600">3 profissões com salários e formação 💼</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-12 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Pronto para Descobrir Seu Futuro? 🚀</h2>
          <p className="text-xl mb-6">Junte-se a milhares de pessoas que já descobriram sua âncora de carreira!</p>
          <a
            href="/teste"
            className="inline-block bg-white text-emerald-600 font-bold py-3 px-8 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Fazer Teste Agora ✨
          </a>
        </div>
      </div>
    </div>
  )
}
