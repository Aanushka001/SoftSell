import { ShieldCheckIcon, BanknotesIcon, ClockIcon } from '@heroicons/react/24/outline'
import '../styles/WhyChooseUs.css'

const benefits = [
  {
    icon: ShieldCheckIcon,
    title: 'Secure Transactions',
    description: 'Your data and financial transactions are protected with enterprise-grade security.',
  },
  {
    icon: BanknotesIcon,
    title: 'Best Market Value',
    description: 'Our proprietary algorithm ensures you get the best possible price for your license.',
  },
  {
    icon: ClockIcon,
    title: 'Fast Process',
    description: 'Complete the entire process in minutes and receive payment within 24 hours.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="section why-choose-us">
      <div className="container">
        <h2 className="section-title">
          Why Choose Us
        </h2>
        <div className="benefits-container">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">
                <benefit.icon className="icon" />
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
