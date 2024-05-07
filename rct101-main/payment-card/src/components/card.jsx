import React, { useState } from 'react'
import "./card.css"
export const Card = ({date,cases,logo,heading,device,color,arrow}) => {
  
  return (
    <div id = {color === true ? "amazon" : "apple"}>
      <div id = "date-logo">
          <h6 id = "date">{date}</h6>
          <h1 id = "logo">{logo}</h1>
      </div>
      <div id = "case-heading">
          <button>{cases}</button>
          <h1 id = "title">{heading}</h1>
      </div>
      <div id = "device-arrow">
          <h6 id = "device">{device}</h6>
          <h1 id = "arrow">{arrow}</h1>
      </div>
    </div>
  )
}
