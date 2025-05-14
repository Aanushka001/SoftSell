import { motion } from 'framer-motion'
import '../styles/HeroSection.css'

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <h1>Unlock the Value of Your Software Licenses</h1>
          <p>Turn your unused software licenses into cash. Fast, secure, and hassle-free.</p>
          <button onClick={scrollToContact} className="btn btn-primary">
            Get a Quote
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-visual"
        >
          <div className="abstract-shape"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection 