import React, { useState } from "react"
import { trending } from "../../dummyData"
import Home from "../homes/Home"
import "./style.css";
import { Link } from "react-router-dom";

const Trending = () => {
  const [items, setItems] = useState(trending)
  return (
    <>
      <Link to='/aboutinfo' style={{textDecoration:'none'}}>
        <section className='trending'>
          <Home items={items} />
        </section>
      </Link>
    </>
  )
}

export default Trending
