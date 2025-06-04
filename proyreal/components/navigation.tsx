"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="PROY Logo" width={40} height={40} />
              <span className="text-2xl font-bold text-emerald-600">PROY</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Início
            </Link>
            <Link href="/teste" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Fazer Teste
            </Link>
            <Link href="/carreiras" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Carreiras
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Sobre Nós
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Contato
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
              Início
            </Link>
            <Link href="/teste" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
              Fazer Teste
            </Link>
            <Link href="/carreiras" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
              Carreiras
            </Link>
            <Link href="/sobre" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
              Sobre Nós
            </Link>
            <Link href="/contato" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
              Contato
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
