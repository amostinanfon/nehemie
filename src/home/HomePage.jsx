import React, { useState } from "react"
import Homes from "../components/homes/Homes"
import Trending from "../components/trending/Trending"
import Upcomming1 from "../components/upcoming/Upcomming"
import Upcomming2 from "../components/upcoming/Upcomming"
import Upcomming3 from "../components/upcoming/Upcomming"
import { latest, recommended, upcome } from "../dummyData"
//import About from '../pages/About'

const HomePage = () => {
  const [items, setItems] = useState(upcome)
  const [item, setItem] = useState(latest)
  const [rec, setRec] = useState(recommended)
  return (
    <>
      <Homes />
      {/* <Upcomming1 items={items} title='Produits' />
      <Upcomming2 items={item} title='Services' /> */}
      <Upcomming1 items={items}/>
      <Upcomming2 items={item}/>
      <Trending />
      {/* <Upcomming3 items={rec} title='Ils nous ont fait confiance' /> */}
      <Upcomming3 items={rec} />
    </>
  )
}

export default HomePage
