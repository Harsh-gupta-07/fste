import Image from "next/image"

export default function FindingsPage() {
  return (
    <div className="container py-8 md:py-12 max-w-4xl">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Research Findings</h1>

      <div className="prose prose-slate max-w-none">
        <h2>Behavior Over Time Analysis</h2>

        <div className="my-6 bg-muted p-4 rounded-md text-center">
          <p className="text-sm text-muted-foreground italic">
            [Behavior Over Time Graph - showing trends in screen time, effective learning time, student engagement, and
            learning outcomes]
          </p>
          <div className="aspect-video bg-slate-200 rounded-md flex items-center justify-center my-4">
            <Image
              src="/Bot.png"
              alt="Behavior Over Time Graph"
              width={800}
              height={400}
              className="rounded-md"
            />
          </div>
        </div>

        <h3>Interptation:</h3>
        <ul>
          <li>Screen Time (red, dashed) gradually increases over 10 years.</li>
          <li>Effective Learning Time (green) drops as screen time rises, reflecting reduced focus.</li>
          <li>Student Engagement (blue) declines over time due to distraction and cognitive fatigue.</li>
          <li>
            Learning Outcomes (purple) follow a downward trend, despite tech proliferation—mirroring real-world reports
            (e.g., ASER 2021).
          </li>
        </ul>

        <h2>Equations & Relationships (Simplified)</h2>

        <h3>a) Screen Time (ST)</h3>
        <p>We assume screen time increases linearly over time due to tech access.</p>
        <p className="bg-muted p-2 rounded-md">ST(t) = 2 + 0.4t + ε₁</p>
        <ul>
          <li>t: year</li>
          <li>Starts at 2 hrs/day → increases ~0.4 hrs/year</li>
          <li>ε₁: random noise to simulate real-life variation</li>
        </ul>

        <h3>b) Effective Learning Time (ELT)</h3>
        <p>Inversely related to screen time.</p>
        <p className="bg-muted p-2 rounded-md">ELT(t) = 6 - 0.8 × (ST(t) - 2) + ε₂</p>
        <ul>
          <li>Higher ST → more distraction → lower ELT</li>
          <li>Base learning capacity ~6 hrs/day</li>
          <li>ε₂: noise to show fluctuations</li>
        </ul>

        <h3>c) Student Engagement (ENG)</h3>
        <p>Negatively impacted by screen time and cognitive fatigue.</p>
        <p className="bg-muted p-2 rounded-md">ENG(t) = 10 - 1.2 × (ST(t) - 2) + ε₃</p>
        <ul>
          <li>Starts high, falls as screen use increases</li>
          <li>Declines more sharply than ELT due to behavioral sensitivity</li>
        </ul>

        <h3>d) Learning Outcomes (LO)</h3>
        <p>Positively influenced by effective learning time and engagement.</p>
        <p className="bg-muted p-2 rounded-md">LO(t) = 40 + 5 × (ELT(t) - 3) + ε₄</p>
        <ul>
          <li>Outcomes modeled as a score index (baseline 40)</li>
          <li>~5 point gain/loss per extra hour of ELT</li>
          <li>Reflects ASER-type literacy scoring or internal assessments</li>
        </ul>

        <h2>Key Insights</h2>

        <ul>
          <li>
            <strong>More tech ≠ better learning:</strong> Screen access without structured engagement often reduces
            effective learning time due to distractions.
          </li>
          <li>
            <strong>Self-regulation is a missing piece:</strong> Students with better discipline and support structures
            show higher resilience against cognitive fatigue and distractions.
          </li>
          <li>
            <strong>Parental involvement is underrated:</strong> Homes with even basic supervision saw better outcomes
            than tech-heavy but unsupervised environments.
          </li>
          <li>
            <strong>Peer dynamics matter:</strong> Social behaviors (e.g., gaming, short-form content) strongly
            influence screen usage trends and distractibility.
          </li>
          <li>
            <strong>Teacher training is a critical bottleneck:</strong> Even high-quality EdTech tools underperform when
            teachers are unppared to use them effectively.
          </li>
        </ul>

        <h2>Proposed Structural Redesigns</h2>

        <ol>
          <li>Integrate behavioral nudges and app-level regulation tools to promote learning over distraction.</li>
          <li>Train teachers and parents not just in tool usage, but in digital pedagogy and supervision.</li>
          <li>Develop localized, gamified, adaptive EdTech content focused on real cognitive outcomes.</li>
          <li>Establish school-parent digital partnerships to co-manage screen behavior and learning support.</li>
        </ol>
      </div>
    </div>
  )
}
