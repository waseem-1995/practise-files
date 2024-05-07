import React, { useState } from 'react'
import Addtodo from './Addtodo'
import Todoinput from './Todoinput'

const Showtodo = () => {
    const [alltodo,settodo] = useState([]);
    const [itodelete,setdelete] = useState(-1);
    const [fun,setfun] = useState("");
    return (
    <div>
      <Addtodo fun={setfun} itodelete={itodelete} settodomain={settodo}/>
      {alltodo.map((e,i) => <Todoinput key={i} fun={fun} i={i} setdelete={setdelete} todomap={e}/>)}
    </div>
  )
}

export default Showtodo
