import React from "react"
import './css/Footer.css'
import FooterNav from "./FooterNav"
// import SubscribeForm from "./FooterForm"
import FooterTest from "./FooterTest"

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <div className="social">
          <a href="https://www.facebook.com/protectcumberlandforest"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/thecumberlandforest/"><i className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/channel/UC5kBsdC3NcmX6XAbUttGUYA"><i className="fab fa-youtube"></i></a>
        </div>
        <FooterNav />
        <FooterTest />
      </footer>
      <p>All content © Cumberland Community Forest Society.</p>

    </div>

  )
}

export default Footer
