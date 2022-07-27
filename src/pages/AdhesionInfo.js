import React from 'react';
import './adhesioninfo.css';
import { Link } from 'react-router-dom'




function AdhesionInfo() {
  return (
    <div>
        <div className='adhesioninfo'>
            <h1>LISTE DES BUSINESS</h1>
        </div>
        <div className='top'>
            <Link to='/' className='two'> AIM- Global</Link>
            <Link to='/' className='one'> Fortune World</Link>
            <Link to='/' className='two'>  Nutrition Market</Link>
	    <Link to='/adhesioninfo' className='one'> Digital community TONTINE</Link>       
 </div>
    </div>
  )
}




export default AdhesionInfo;
