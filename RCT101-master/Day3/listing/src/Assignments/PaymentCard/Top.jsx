import React from 'react'

const Top = (props) => {
  return (
    <>
      <div className='Top'>
        <p>{props.date}</p>
        <img src={props.logo} alt="" />
      </div>
    </>
  )
}

export default Top