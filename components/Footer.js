export default function Footer(){
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Crestvista Properties</h3>
            <p>Where Value Meets Excellence. Your trusted partner for premium real estate in Kenya.</p>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <span>Lonak Business Centre, Kasarani, Nairobi</span>
            </div>
            <div className="contact-info">
              <span>0758 625 209 / 0739 944 751</span>
            </div>
            <div className="contact-info">
              <span>info@crestvistapropertiesltd.co.ke</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Crestvista Properties LTD. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
