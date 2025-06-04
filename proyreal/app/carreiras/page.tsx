"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

// Importar os dados das âncoras
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
        salary: "R$ 8.000 - R$ 50.000+)",
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

// Extrair todas as profissões
const allProfessions = Object.entries(anchorData).flatMap(([anchorKey, anchor]) =>
  anchor.professions.map((profession) => ({
    ...profession,
    anchor: anchorKey,
    anchorName: anchor.name,
  })),
)

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterAnchor, setFilterAnchor] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  // Filtrar e ordenar profissões
  const filteredProfessions = allProfessions
    .filter(
      (profession) =>
        (filterAnchor === "all" || profession.anchor === filterAnchor) &&
        (profession.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          profession.description.toLowerCase().includes(searchTerm.toLowerCase())),
    )
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name)
      } else if (sortBy === "salary") {
        // Extrair o valor mínimo do salário para ordenação
        const getMinSalary = (salary: string) => {
          const match = salary.match(/R\$ (\d+)/)
          return match ? Number.parseInt(match[1], 10) : 0
        }
        return getMinSalary(b.salary) - getMinSalary(a.salary)
      } else {
        return a.anchorName.localeCompare(b.anchorName)
      }
    })

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Início
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Todas as Carreiras 💼</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore todas as profissões recomendadas para cada âncora de carreira e encontre a que mais combina com
            você!
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Input
              placeholder="Buscar profissão..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <Select value={filterAnchor} onValueChange={setFilterAnchor}>
              <SelectTrigger>
                <SelectValue placeholder="Filtrar por âncora" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as âncoras</SelectItem>
                {Object.entries(anchorData).map(([key, anchor]) => (
                  <SelectItem key={key} value={key}>
                    {anchor.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Nome</SelectItem>
                <SelectItem value="salary">Salário</SelectItem>
                <SelectItem value="anchor">Âncora</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Lista de profissões */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfessions.map((profession, index) => (
            <Card key={index} className="shadow-lg card-hover">
              <CardHeader className="pb-2">
                <Badge className="mb-2 self-start" variant="outline">
                  {anchorData[profession.anchor as keyof typeof anchorData].name}
                </Badge>
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

        {filteredProfessions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhuma profissão encontrada com os filtros atuais.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Não encontrou o que procura?{" "}
            <Link href="/teste" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Faça o teste
            </Link>{" "}
            para descobrir sua âncora de carreira!
          </p>
        </div>
      </div>
    </div>
  )
}
