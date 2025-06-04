import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/logo.png" alt="PROY Logo" width={40} height={40} />
              <span className="text-2xl font-bold text-emerald-400">PROY</span>
            </div>
            <p className="text-gray-300 mb-4">
              Ajudando pessoas a descobrirem seu caminho profissional através das âncoras de carreira. Encontre sua
              vocação e construa o futuro dos seus sonhos! 🌟
            </p>
            <p className="text-sm text-gray-400">
              "O sucesso é a soma de pequenos esforços repetidos dia após dia." ✨
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/teste" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Fazer Teste
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Âncoras de Carreira</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>🎯 Competência Técnica-Funcional</li>
              <li>👥 Competência Administrativa Geral</li>
              <li>🚀 Autonomia e Independência</li>
              <li>🔒 Segurança e Estabilidade</li>
              <li>💡 Criatividade Empreendedora</li>
              <li>⭐ Dedicação a uma Causa</li>
              <li>🏆 Desafio Puro</li>
              <li>⚖️ Estilo de Vida</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Feito com <Heart className="h-4 w-4 text-red-500 mx-1" /> pela equipe PROY © 2025
          </p>
        </div>
      </div>
    </footer>
  )
}
