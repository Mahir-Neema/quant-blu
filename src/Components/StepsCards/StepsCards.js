import React from 'react'
import './StepsCards.css'
import Cards from './Cards/Cards'
import { CardsData } from './CardsData'

function StepsCards() {
  return (
    <section className='steps_cards'>
        <div className="mainheading">Lorem ipsum dolor sit amet </div>
        <div className="steps_heading">Get Started with 4 Easy Steps</div>

        <div className="cards_info">
            {CardsData.map((items,index)=>{
              return <Cards key={index} count={items.idx} imgsrc={items.imgsrc} text={items.text} url={items.url}/>
            })}
            
        </div>
    </section>
  )
}

export default StepsCards