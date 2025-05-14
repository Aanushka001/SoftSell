import { CloudArrowUpIcon, DocumentMagnifyingGlassIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
// import '../styles/HowItWorks.css'

const steps = [
  {
    icon: CloudArrowUpIcon,
    title: 'Upload License',
    description: 'Share your software license details securely through our platform',
  },
  {
    icon: DocumentMagnifyingGlassIcon,
    title: 'Get Valuation',
    description: 'Receive an instant market-based valuation for your license',
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Get Paid',
    description: 'Accept our offer and receive payment within 24 hours',
  },
]

const HowItWorks = () => {
  return (
    <section className="section how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-icon">
                <step.icon className="icon" />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks