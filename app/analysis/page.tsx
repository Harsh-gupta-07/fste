import Image from "next/image"

export default function AnalysisPage() {
  return (
    <div className="container py-8 md:py-12 max-w-4xl">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Systems Analysis</h1>

      <div className="prose prose-slate max-w-none">
        <h2>Causal Loop Diagram (CLD)</h2>

        <div className="my-6 bg-muted p-4 rounded-md text-center">
          <p className="text-sm text-muted-foreground italic">
            [Causal Loop Diagram would be displayed here - showing the relationships between screen time, learning
            outcomes, parental supervision, content quality, etc.]
          </p>
          <div className="aspect-video bg-slate-200 rounded-md flex items-center justify-center my-4">
            <Image
              src="/Picture1.png"
              alt="Causal Loop Diagram"
              width={800}
              height={400}
              className="rounded-md"
            />
          </div>
        </div>

        <h2>Leverage Points Analysis</h2>

        <p>Based on Donella Meadows' framework, we identified key leverage points in the system:</p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Leverage Point</th>
                <th className="text-left p-2">Donella Meadows Category</th>
                <th className="text-left p-2">Why Important</th>
                <th className="text-left p-2">Expected Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Parental Supervision</td>
                <td className="p-2">Rules of the System</td>
                <td className="p-2">Parents influence screen use, distractions, and learning structure at home.</td>
                <td className="p-2">
                  Increased supervision reduces distractions, boosts learning time, and fosters healthier screen habits.
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Quality of EdTech Content</td>
                <td className="p-2">Structure of Information Flows</td>
                <td className="p-2">The type of content directly impacts student engagement and learning retention.</td>
                <td className="p-2">
                  Higher-quality, personalized content increases motivation, effective learning time, and academic
                  outcomes.
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Teacher Tech Preparedness</td>
                <td className="p-2">Structure of the System</td>
                <td className="p-2">
                  Teachers are system enablers; tech-literate teachers can elevate the learning experience.
                </td>
                <td className="p-2">
                  Improves content quality, better student engagement, and integration of digital pedagogy.
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Self-regulation Skills</td>
                <td className="p-2">Positive Feedback Loop Reinforcement</td>
                <td className="p-2">
                  Self-management allows students to limit distractions without external enforcement.
                </td>
                <td className="p-2">
                  Reduces dependence on supervision, builds autonomy, and sustainably improves learning efficiency.
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Home Learning Environment</td>
                <td className="p-2">System Structure and Delays</td>
                <td className="p-2">
                  A stable, distraction-minimized, emotionally supportive environment is foundational.
                </td>
                <td className="p-2">
                  A positive home environment reduces stress, encourages learning, and enhances screen usage discipline.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>System Archetypes</h2>

        <p>
          The CLD reveals the presence of multiple system archetypes that explain the persistent underperformance in
          learning outcomes despite increased digital access:
        </p>

        <h3>1. "Shifting the Burden"</h3>

        <p>
          Technology (screen time and EdTech tools) is used as a symptomatic solution to improve learning without
          addressing the root causes like poor content quality, lack of self-regulation skills, or insufficient parental
          supervision. This creates a dependency on digital devices, leading to distraction and cognitive fatigue, which
          further erode student engagement and learning time.
        </p>

        <h3>2. "Fixes That Fail"</h3>

        <p>
          Increased screen time is assumed to equate to better learning outcomes. Initially, digital tools offer
          convenience and engagement, but over time, the unintended side effects such as reduced attention span and
          overexposure to entertainment undermine the intended goals. The system eventually becomes locked in
          reinforcing loops that magnify the very problems it aims to solve.
        </p>

        <h3>3. "Limits to Growth"</h3>

        <p>
          Even when engagement or quality content improves learning, gains are eventually capped by limiting factors
          such as cognitive fatigue or peer-driven distraction. Unless those limits are addressed structurally through
          better home environments, regulation mechanisms, and holistic support, any improvements will plateau or
          reverse.
        </p>

        <h2>Event → Pattern → Structure Analysis</h2>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Layer</th>
                <th className="text-left p-2">Our Analysis</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-medium">Event</td>
                <td className="p-2">
                  <ul className="list-disc pl-5 my-0">
                    <li>Students spend 5–7 hours/day on digital devices, mostly unsupervised.</li>
                    <li>Learning outcomes in foundational literacy and numeracy have declined (ASER 2021).</li>
                    <li>Parents complain about excessive gaming, YouTube, and distractions.</li>
                    <li>Government EdTech portals (like DIKSHA) have low engagement despite high reach.</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Pattern</td>
                <td className="p-2">
                  <ul className="list-disc pl-5 my-0">
                    <li>
                      Increased screen time correlates with declining academic performance and shorter attention spans.
                    </li>
                    <li>Students are more attracted to entertainment than educational content.</li>
                    <li>
                      Rural and low-income students are disproportionately affected due to poor internet and device
                      access.
                    </li>
                    <li>Initial interest in online classes drops sharply after 1–2 weeks of use.</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Structure</td>
                <td className="p-2">
                  <ul className="list-disc pl-5 my-0">
                    <li>
                      Lack of self-regulation mechanisms: No systems to limit distractions or manage time effectively.
                    </li>
                    <li>
                      One-size-fits-all EdTech: Content is often non-interactive, irrelevant, or poorly localized.
                    </li>
                    <li>
                      Weak home learning environments: Parents are either unaware, digitally illiterate, or unable to
                      monitor usage.
                    </li>
                    <li>
                      Systemic reliance on tech without addressing pedagogy: Policy incentives focus on hardware access
                      over human-centered design or learning outcomes.
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
