import React from 'react'
import Top from './Top'
import Mid from './Mid'
import Low from './Low'
import './style.css'

const MainCard = ({color,data}) => {

  return (
    <div style={{backgroundColor:color}} className='card'>
      <Top {...data}/>
      <Mid {...data}/>
      <Low {...data}/>
    </div>
  )
}

export default MainCard