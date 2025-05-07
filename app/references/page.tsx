export default function ReferencesPage() {
  return (
    <div className="container py-8 md:py-12 max-w-4xl">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">References</h1>

      <div className="prose prose-slate max-w-none">
        <ul className="space-y-4">
          <li>
            <strong>Annual Status of Education Report (ASER) 2021 – Pratham Foundation</strong>
            <p className="text-sm text-muted-foreground">Foundational learning data in rural India</p>
            <a href="https://asercentre.org/aser-2021/" className="text-sm break-all text-primary">
              https://asercentre.org/aser-2021/
            </a>
          </li>

          <li>
            <strong>Brookings Institute – EdTech Impact in India</strong>
            <p className="text-sm text-muted-foreground">Digital divide and learning effectiveness during COVID</p>
            <a
              href="https://www.brookings.edu/articles/how-has-education-technology-impacted-student-learning-in-india-during-covid-19"
              className="text-sm break-all text-primary"
            >
              https://www.brookings.edu/articles/how-has-education-technology-impacted-student-learning-in-india-during-covid-19
            </a>
          </li>

          <li>
            <strong>UNICEF India – Education and Digital Learning Dashboard</strong>
            <p className="text-sm text-muted-foreground">Access and equity data</p>
            <a href="https://www.unicef.org/india/what-we-do/education" className="text-sm break-all text-primary">
              https://www.unicef.org/india/what-we-do/education
            </a>
          </li>

          <li>
            <strong>PMC Research (2023) – Cognitive Effects of Screen Time in Children</strong>
            <p className="text-sm text-muted-foreground">Scientific study on mental health and screen exposure</p>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10353947" className="text-sm break-all text-primary">
              https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10353947
            </a>
          </li>

          <li>
            <strong>Sampark Foundation – Smart Shala Case Study</strong>
            <p className="text-sm text-muted-foreground">
              Real-life implementation of structured EdTech in rural India
            </p>
            <a href="https://www.samparkfoundation.org" className="text-sm break-all text-primary">
              https://www.samparkfoundation.org
            </a>
          </li>

          <li>
            <strong>CLT India – e-Patashale Program</strong>
            <p className="text-sm text-muted-foreground">EdTech content impact report</p>
            <a href="https://cltindia.org" className="text-sm break-all text-primary">
              https://cltindia.org
            </a>
          </li>
        </ul>

        <h2 className="mt-8">Tools Used</h2>
        <ul>
          <li>Vensim PLE (CLD)</li>
          <li>Google Scholar & ResearchGate </li>
        </ul>
      </div>
    </div>
  )
}
