export default function ProblemPage() {
  return (
    <div className="container py-8 md:py-12 max-w-4xl">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
        The Problem: Screen-Time vs. Learning-Time Dilemma
      </h1>

      <div className="prose prose-slate max-w-none">
        <h2>Introduction to the Problem</h2>

        <p>
          In the past decade, India has seen a dramatic rise in the availability
          of digital devices and internet connectivity, especially accelerated
          by government initiatives like Digital India and EdTech platforms like
          DIKSHA and BYJU'S. Despite this rapid digital expansion, the intended
          leap in learning outcomes among school children has not materialized.
        </p>

        <p>
          Data from sources like ASER (Annual Status of Education Report) and
          UNICEF reveal a persistent gap in foundational literacy and numeracy,
          with nearly 50% of Grade 5 students unable to read a Grade 2-level
          text—even after years of exposure to digital tools.
        </p>

        <p>
          The assumption that "more tech = better learning" has proven
          misleading. While access to devices has improved, its impact on
          education has been fragmented due to issues like:
        </p>

        <ul>
          <li>Unstructured screen use</li>
          <li>Low-quality EdTech content</li>
          <li>Lack of teacher training</li>
          <li>Widening digital divides between urban and rural students</li>
        </ul>

        <p>
          Additionally, increased screen time has led to cognitive fatigue and
          shorter attention spans, further limiting the depth of student
          engagement.
        </p>

        <p>
          This disconnect between digital access and educational benefit
          highlights a deeper systemic issue, one that goes beyond
          infrastructure and into behavioral, pedagogical, and structural
          domains.
        </p>

        <h2>Why This Is a Systemic Issue</h2>

        <p>
          This issue is systemic in India because it exposes the gap between
          digital infrastructure and actual learning outcomes. Despite rising
          device access, foundational skills remain weak, especially in rural
          areas. The problem reflects deep-rooted structural flaws of poor
          content quality, untrained teachers, and inequitable internet access.
        </p>

        <p>
          It affects millions of students, risking a generation's potential.
          Tackling it requires rethinking not just access, but how technology is
          integrated into pedagogy, making it a critical challenge for India's
          education future.
        </p>
      </div>
      <div className=" bg-white text-gray-900 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          <div className="border border-gray-300 rounded-2xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Key Challenges</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Unstructured screen use without educational focus</li>
              <li>Low-quality EdTech content not aligned with curriculum</li>
              <li>Lack of teacher training in digital pedagogy</li>
              <li>Widening digital divide between urban and rural students</li>
              <li>Cognitive fatigue and shortened attention spans</li>
              <li>Absence of parental supervision and guidance</li>
            </ul>
          </div>

          <div className="border border-gray-300 rounded-2xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Impact on Learning</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>50% of Grade 5 students cannot read Grade 2-level text</li>
              <li>Persistent gaps in foundational literacy and numeracy</li>
              <li>
                Increased screen time correlates with declining academic
                performance
              </li>
              <li>
                Students more attracted to entertainment than educational
                content
              </li>
              <li>
                Initial interest in online classes drops sharply after 1–2 weeks
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
