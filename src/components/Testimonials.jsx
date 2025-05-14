import { motion } from 'framer-motion'
import '../styles/Testimonials.css'

const testimonials = [
  {
    name: 'Aditya Adhana',
    role: 'CTO',
    company: 'Credex',
    image: 'https://ui-avatars.com/api/?name=Aditya+Adhana&background=1A73E8&color=fff',
    quote: 'SoftSell made it incredibly easy to monetize our unused software licenses. The process was smooth and the team was very professional.'
  },
  {
    name: 'Sarah Chen',
    role: 'IT Director',
    company: 'TechFlow Solutions',
    image: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=34A853&color=fff',
    quote: 'We were amazed by how quickly we could convert our excess licenses into cash. The valuation was fair and the payment was prompt.'
  }
]

const Testimonials = () => {
  return (
    <section className="section testimonials">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          What Our Clients Say
        </motion.h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="testimonial-content">
                <p className="quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 