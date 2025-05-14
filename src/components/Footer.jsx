import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SoftSell</h3>
            <p>Unlock the value of your software licenses with our secure and efficient platform.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#contact">Get a Quote</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>Email: contact@softsell.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Location: San Francisco, CA</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} SoftSell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 