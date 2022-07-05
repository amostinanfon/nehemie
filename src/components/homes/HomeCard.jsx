import React from "react"
import { Link } from "react-router-dom"

const HomeCard = ({ item: { id, cover, name, rating, time, desc, starring, genres, tags, video } }) => {
  return (
    <>
      <div className='box'>
        <div className='coverImage'>
          <img src={cover} alt='' />
        </div>
        <div className='content flex'>
          <div className='details row'>
            <h1>{name}</h1>
            <div className='rating flex'>
              <div className='rate'>
                <i className='fas fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star-half'></i>
              </div>
            </div>
            <p style={{marginBottom:'5px'}}>{desc}</p>
            {/* <button className='primary-btn'>
              <i className='fas fa-play'></i> PLUS DE DOUTE
            </button> */}
          </div>
          {/* <div className='palyButton row'>
            <Link to={`/singlepage/${id}`}>
              <button>
                <div className='img'>
                  <img src='./images/play-button.png' alt='' />
                  <img src='./images/play.png' className='change' />
                </div>
                VOIR ET 
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default HomeCard
