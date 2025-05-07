import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {ArrowRight} from "lucide-react"

export default function Home() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Systems Thinking Hackathon 2025</h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mb-6">
          Team 105 Research Report on the Screen-Time vs. Learning-Time Dilemma in Indian Education
        </p>

      </div>

      <div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>Group 105 Researchers</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>Gangeli Devanand Siddhardha (2402110008)</li>
              <li>Alok Kumar (2401010058)</li>
              <li>Sayan Bhattacharya (2401020059)</li>
              <li>Harshvardhan Gupta (2401010185)</li>
              <li>Sameer Khan (2401020054)</li>
            </ul>
          </CardContent>
        </Card>

        
      </div>
      <div className="container py-12 md:py-16 lg:py-24">
      <div className="mb-16 border rounded-lg p-8 border-gray-800">
        <h2 className="text-2xl font-bold mb-4">Specific Problem Statement</h2>
        <h1 className="text-4xl font-bold mb-6">The Screen-Time vs. Learning-Time Dilemma</h1>
        <p className="text-xl italic">
          Why has increased access to digital devices and the internet not translated into improved learning outcomes
          for school children in India?
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/problem"
          className="border rounded-lg p-8 border-gray-800 flex flex-col justify-between hover:border-gray-700 transition-colors"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-between">
              Problem
              <ArrowRight className="h-6 w-6" />
            </h2>
            <p className="text-gray-400">Explore the detailed problem statement and its systemic nature in India.</p>
          </div>
        </Link>

        <Link
          href="/methodology"
          className="border rounded-lg p-8 border-gray-800 flex flex-col justify-between hover:border-gray-700 transition-colors"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-between">
              Methodology
              <ArrowRight className="h-6 w-6" />
            </h2>
            <p className="text-gray-400">Learn about the process followed and research methods used.</p>
          </div>
        </Link>

        <Link
          href="/analysis"
          className="border rounded-lg p-8 border-gray-800 flex flex-col justify-between hover:border-gray-700 transition-colors"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-between">
              Analysis
              <ArrowRight className="h-6 w-6" />
            </h2>
            <p className="text-gray-400">View our Causal Loop Diagram and Leverage Points Analysis.</p>
          </div>
        </Link>

        <Link
          href="/findings"
          className="border rounded-lg p-8 border-gray-800 flex flex-col justify-between hover:border-gray-700 transition-colors"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-between">
              Findings
              <ArrowRight className="h-6 w-6" />
            </h2>
            <p className="text-gray-400">Discover our interpretations, equations, and additional insights.</p>
          </div>
        </Link>

        <Link
          href="/references"
          className="border rounded-lg p-8 border-gray-800 flex flex-col justify-between hover:border-gray-700 transition-colors"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-between">
              References
              <ArrowRight className="h-6 w-6" />
            </h2>
            <p className="text-gray-400">Check the sources and tools used for this research.</p>
          </div>
        </Link>
      </div>
    </div>
    </div>
  )
}
