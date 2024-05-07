import React from 'react'

export default function Button({name,func}) {
  return (
    <div>
<button onClick={func}>{name}</button>

    </div>
  )
}
