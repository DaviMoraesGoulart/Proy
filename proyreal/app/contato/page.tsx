"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Star } from "lucide-react"

export default function ContactPage() {
  const [rating, setRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contacts = [
    {
      icon: <Mail className="h-6 w-6 text-emerald-600" />,
      title: "Email",
      info: "contato@proy.com.br",
      description: "Resposta em até 24h 📧",
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Telefone",
      info: "(11) 9999-8888",
      description: "Seg-Sex, 9h às 18h 📞",
    },
    {
      icon: <MapPin className="h-6 w-6 text-purple-600" />,
      title: "Endereço",
      info: "Tubarão, SC",
      description: "Brasil 🇧🇷",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Entre em Contato 📞</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tem dúvidas sobre o teste? Quer dar feedback? Estamos aqui para ajudar! ✨
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Nossos Contatos 📋</h2>

            <div className="space-y-6 mb-8">
              {contacts.map((contact, index) => (
                <Card key={index} className="shadow-lg card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{contact.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{contact.title}</h3>
                        <p className="text-gray-700 font-medium mb-1">{contact.info}</p>
                        <p className="text-gray-600 text-sm">{contact.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="shadow-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">💡 Dica</h3>
                <p>
                  Antes de entrar em contato, que tal fazer nosso teste de âncoras de carreira? Pode ser que suas
                  dúvidas sejam esclarecidas! 😊
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Envie sua Mensagem 💌</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold text-emerald-600 mb-2">Mensagem Enviada!</h3>
                    <p className="text-gray-600">Obrigado pelo seu contato! Responderemos em breve. ✨</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input id="name" placeholder="Seu nome aqui 😊" required className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="seu@email.com 📧" required className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="subject">Assunto</Label>
                      <Input id="subject" placeholder="Sobre o que você quer falar? 💭" required className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        placeholder="Conte-nos mais detalhes... 📝"
                        required
                        className="mt-1 min-h-[120px]"
                      />
                    </div>

                    {/* Rating Section */}
                    <div>
                      <Label className="text-base font-medium">Como foi sua experiência com o PROY? ⭐</Label>
                      <div className="flex space-x-2 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            className={`p-1 transition-colors ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
                          >
                            <Star className="h-6 w-6 fill-current" />
                          </button>
                        ))}
                      </div>
                      {rating > 0 && (
                        <p className="text-sm text-gray-600 mt-1">
                          {rating === 5 && "Excelente! 🌟"}
                          {rating === 4 && "Muito bom! 😊"}
                          {rating === 3 && "Bom! 👍"}
                          {rating === 2 && "Pode melhorar 😐"}
                          {rating === 1 && "Precisa melhorar 😔"}
                        </p>
                      )}
                    </div>

                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-3">
                      Enviar Mensagem 🚀
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Perguntas Frequentes 🤔</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-emerald-600">O teste é realmente gratuito? 💰</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sim! O PROY é 100% gratuito. Acreditamos que orientação profissional deve ser acessível para todos! ✨
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-emerald-600">Quanto tempo leva o teste? ⏰</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  O teste tem 12 perguntas e leva cerca de 5-10 minutos para ser concluído. Rápido e eficiente! 🚀
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-emerald-600">Posso fazer o teste mais de uma vez? 🔄</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Claro! Você pode refazer o teste quantas vezes quiser. Suas preferências podem mudar com o tempo! 😊
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-emerald-600">O resultado é confiável? 🎯</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nosso teste é baseado na teoria científica de Edgar Schein, amplamente reconhecida na psicologia
                  organizacional! 📚
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
