import React from 'react';
import './contrat.css';
import {Link} from 'react-router-dom'

function Contrat() {
  return (
    <div>
        <div className='contrat'>
            <h1>Contrat d'adhésion</h1>
            <p>Ce contrat est conclu entre vous et le réseau SUN7NETWORK. Il est daté de votre date de demande d'attribution du numéro identifiant <strong>(ID)</strong> via l'e-mail que vous décidez librement d'envoyer au réseau SUN7NETWORK. Par cette action volontaire, vous acceptez l'ensemble des Conditions et règles du réseau et marqué ainsi votre adhésion à ce projet et ce de façon volontaire.</p>
        </div>
        <div className='top'>
             <p>IL SE PRESENTE COMME SUIT :</p>
            <Link to='/preambule' className='one'>Préambule</Link>
            <Link to='/presentation' className='two'>Présentation</Link>
            <Link to='/responsabilite' className='one'>Responsabilité</Link>
            <Link to='/statut' className='two'>Le statut de membre sun7network</Link>
            <Link to='/type' className='one'>Les types de membre</Link>
            <Link to='/perte' className='two'>La perte du statut de membre</Link>
            <Link to='/confidentialite' className='one'>Politique de confidentialité</Link>
            <Link to='/modification' className='two'>Modification du contrat</Link>
        </div>
    </div>
    
  )
}

export default Contrat