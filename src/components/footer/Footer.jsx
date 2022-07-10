import React from "react"
import { homeData } from "../../dummyData"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <ul className='flex'>
              <li>Termes d'utilisation</li>
              <li>Blog</li>
              <li>FAQ</li>
            </ul>
            <p>© 2022 SUNSET. Ce site est la propriété de SUN7 developpé par the_process</p>
          </div>
          <div className='box'>
            <h3>Nous suivre</h3>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-instagram'></i>
            <i className='fab fa-telegram'></i>
          </div>
          {/* <div className='box'>
            <h3>Sunset Contact</h3>
            <div className='img flexSB'>
              <img src='https://img.icons8.com/color/48/000000/apple-app-store--v3.png' />
              <span>App Store</span>
              <img src='https://img.icons8.com/fluency/48/000000/google-play.png' />
              <span>Google Play Store</span>
            </div>
          </div> */}
        </div>
      </footer>
    </>
  )
}

export default Footer
