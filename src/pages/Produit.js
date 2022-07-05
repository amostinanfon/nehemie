import React, { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Upcomming1 from "../components/upcoming/Upcomming";
import { latest, recommended, upcome } from "../dummyData"


const Produit = () => {

    const [items, setItems] = useState(upcome)
    const [item, setItem] = useState(latest)
    const [rec, setRec] = useState(recommended)
    
  return (
    <div>
        <Upcomming1 items={items} title='PRODUITS ET SERVICES' />
        <Upcomming1 items={items}  />
    </div>
  )
}

export default Produit;