import React, { forwardRef } from 'react'

const Printitem = forwardRef(({ changeHandeler , BackSpaceHandeler },ref) => {
  const handelKeyup=(e)=>{
    if(e.keyCode===8){
      BackSpaceHandeler(e);
    }
    else{
      changeHandeler(e)
    }
  }
  return (
    <div>
      <input  ref={ref}
     onKeyUp={(e)=>handelKeyup(e)}
      maxLength={1}/>

    </div>
  )
});

export default Printitem