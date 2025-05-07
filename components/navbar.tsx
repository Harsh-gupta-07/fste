import Link from "next/link"
import { BookOpen } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <BookOpen className="h-6 w-6" />
          <span>Team 105</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/problem" className="text-sm font-medium hover:underline underline-offset-4">
            Problem
          </Link>
          <Link href="/methodology" className="text-sm font-medium hover:underline underline-offset-4">
            Methodology
          </Link>
          <Link href="/analysis" className="text-sm font-medium hover:underline underline-offset-4">
            Analysis
          </Link>
          <Link href="/findings" className="text-sm font-medium hover:underline underline-offset-4">
            Findings
          </Link>
          <Link href="/references" className="text-sm font-medium hover:underline underline-offset-4">
            References
          </Link>
        </nav>
      </div>
    </header>
  )
}
