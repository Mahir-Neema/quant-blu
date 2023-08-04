import React from 'react'
import './Cards.css'

function Cards(props) {

  const flexStyle = props.count % 2 === 0 ? { flexDirection: 'row-reverse' } : {};

  return (
    <div className='cards' style={flexStyle}>
        <div className="cardsImage">
            <span className="cardNumber">{props.count}</span>
            <img src={props.imgsrc} alt="cards" className='cardsImg'/>
        </div>

        <div className="cardsText">
            <div className="cardsContent"> {props.text}</div>
            <div className="cardsUrl"> {props.url}</div>
        </div>
    </div>
  )
}

export default Cards