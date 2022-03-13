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
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </div>
        <FooterNav />
        <FooterTest />
      </footer>
      <p>All content © Cumberland Community Forest Society.</p>

    </div>

  )
}

export default Footer
