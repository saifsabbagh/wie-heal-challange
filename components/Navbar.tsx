'use client';
import { Button } from "@/components/ui/button"
import { Heart, Menu } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Heart className="h-8 w-8 text-pink-500" />
          <span className="text-2xl font-bold text-pink-700">Wie Care</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-pink-700 hover:text-pink-500">Home</Link>
          <Link href="/doctors" className="text-pink-700 hover:text-pink-500">Doctors</Link>
          <Link href="/medicalpublications" className="text-pink-700 hover:text-pink-500">Medical publications</Link>
          <Link href="/diagnostic" className="text-pink-700 hover:text-pink-500">Diagnostic</Link>
        </nav>
        <Button className="md:hidden bg-pink-500 hover:bg-pink-600">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  )
}