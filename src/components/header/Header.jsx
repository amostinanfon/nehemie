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
             <p style={{fontWeight:'800', fontSize:'30px'}}><span style={{color: 'red'}}>Sun</span>7</p>
            </div>
            {/*<ul className='flexSB'>*/}
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <Link to='/'>Acceuil</Link>
              </li>
              <li>
                <Link to='/about'>A propos</Link>
              </li>
              <li>
                <Link to='/produit'>Produits</Link>
              </li>
              <li>
                <Link to='/Partenaire'>Partenaires</Link>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <div className='account flexSB'>
            <i className='fa fa-search'></i>
            <i className='fas fa-bell'></i>
            <i className='fas fa-user'></i>
            <div className="profile">
              <button>Adhérer</button>
              <div className="options">
                <span>
                  <Link to='/adhesion'>projet 1</Link>
                </span>
                <span>
                  <Link to='/adhesion2'>projet 2</Link>
                </span>

                <span>
                  <Link to='/adhesion2'>projet 3</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
