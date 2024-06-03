import React from 'react'
import Carousel from '../components/Carousel'
import discount from '../image/yspod/discount.jpg'

import top from '../image/yspod/16.jpg'
import top1 from '../image/yspod/17.jpg'
import top2 from '../image/yspod/13.jpg'
import top3 from '../image/yspod/6.jpg'

import caru from '../image/yspod/caru.jpg'
export default function Home() {
    const image = [
      {img:caru},
      {img:caru},
      {img:caru}
    ]
    const arrival = [
      {
        img:top, 
        type:"Men's"
      },
      {
        img:top1, 
        type:"Women's"
      },
      {
        img:top2, 
        type:"Kid's"
      },
      {
        img:top3, 
        type:"Tops"
      },
    ]
    
  return (
    <div className='home'>
        <Carousel image={image}/>
        <div className="discount">
          <img src={discount} alt="" />
          <h5>buy 2, get</h5>
          <h1>10% OFF</h1>
        </div>
        <div className="new-arrival">
          <h2>new arrivals</h2>
          <div className="new-arrival-container">
            {arrival.map((newArrival, index) => (
              <React.Fragment key={index}>
                <div className='info'>
                <div className="new-arrival-img">
                    <img src={newArrival.img} alt="" />
                </div>
                <p>{newArrival.type}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

    </div>
  )
}
