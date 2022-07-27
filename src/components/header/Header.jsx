import React, { useState } from "react"
import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              {/* <img src='./images/logo.png' alt='' /> */}
              {/* <img src="../../assets/images/Capture2.JPG" alt=""/> */}
             <p style={{fontWeight:'800', fontSize:'30px', margin:'20% 0'}}><span style={{color: '#fa936a'}}>S💧n</span>7</p>
            </div>
            {/*<ul className='flexSB'>*/}
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <Link to='/'>Accueil</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/produit'>Produits</Link>
              </li>
              <li>
                <Link to='/adhesion'>Adhérer</Link>
              </li>
              <li>
                <Link to='/activation'>Activer</Link>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          {/* <div className='account flexSB'>
            <button className="active" style={{margin:"10px"}}>Activer</button>
            <div className="profile">
              <button>Adhérer</button>
              <div className="options">
                <span>
                  <Link to='/adhesion'>projet 1</Link>
                </span>
              </div>
            </div> */}
          {/* <div className='account flexSB'>
              <button>
                <Link to='/adhesion'>Adhérer</Link>
              </button>
          </div> */}
        </div>
      </header>
    </>
  )
}

export default Header
