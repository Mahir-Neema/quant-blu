import React from 'react'
import './Graph.css'
import ChartCont from './Chart/ChartCont'

function Graph() {
  return (
    <div className='graphcontainer'>
        <div className="featureHeading">Feature 1</div>
        <div className="featureContent">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</div>
        <div className="charts">
            <ChartCont/>
        </div>
    </div>
  )
}

export default Graph