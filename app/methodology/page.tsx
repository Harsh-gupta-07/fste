export default function MethodologyPage() {
  return (
    <div className="container py-8 md:py-12 max-w-4xl">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Research Methodology</h1>

      <div className="prose prose-slate max-w-none">
        <h2>Process Followed</h2>

        <ol className="list-decimal pl-5 space-y-2">
          <li>Identified and understood the core problem statement: Screen-Time vs. Learning-Time Dilemma</li>
          <li>
            Conducted secondary research using sources like ASER 2021, UNICEF, Brookings, PMC studies, and government
            EdTech initiatives
          </li>
          <li>Extracted key data points and insights to frame the system-level challenges</li>
          <li>Listed and refined 11 interrelated variables impacting learning outcomes</li>
          <li>Designed a Causal Loop Diagram (CLD) using Vensim-style logic with polarity mapping (S/O)</li>
          <li>Analyzed reinforcing and balancing feedback loops within the system</li>
          <li>Identified leverage points based on Donella Meadows' framework</li>
          <li>Mapped System Archetypes like "Shifting the Burden" and "Fixes that Fail"</li>
          <li>Performed Event → Pattern → Structure analysis to trace root causes</li>
          <li>Proposed system-level interventions targeting structural redesigns, not just surface fixes</li>
          <li>Compiled insights, diagrams, and system narratives into the final report format</li>
        </ol>

        <h2>Analysis Techniques</h2>

        <p>Our methodology relied on a combination of:</p>

        <ul>
          <li>
            <strong>Secondary Research:</strong> Analysis of reports from ASER, UNICEF, Brookings Institute, and PMC
            studies
          </li>
          <li>
            <strong>Systems Thinking Frameworks:</strong> Application of Donella Meadows' leverage points, causal loop
            diagramming, and system archetypes
          </li>
          <li>
            <strong>Data Analysis:</strong> Examination of trends in screen time, learning outcomes, and digital access
          </li>
          <li>
            <strong>Case Studies:</strong> Review of EdTech implementations like Sampark Foundation's Smart Shala and
            CLT India's e-Patashale Program
          </li>
        </ul>

        <h2>Tools Used</h2>

        <ul>
          <li>Vensim PLE (for Causal Loop Diagrams and BoT)</li>
          <li>Google Scholar & ResearchGate (theory references)</li>
        </ul>
      </div>
    </div>
  )
}
