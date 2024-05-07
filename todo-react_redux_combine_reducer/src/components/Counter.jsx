import React from 'react'
import { useDispatch ,useSelector } from 'react-redux/es/exports'
import {store} from "../Redux/store"
import { incrementCounter,decrementCounter } from '../Redux/App/action'

const Counter = () => {

    const Counter=useSelector((store)=>store.reducer.Counter)
    const dispatch=useDispatch()

    const handleincre=()=>{
   dispatch(incrementCounter(1))
    }
    const handledecre=()=>{
        if(Counter>0){
            dispatch(decrementCounter(1))
        }
       
         }
    
  return (
    <div>
        <h3>Counter:{Counter}</h3>
        <button onClick={handleincre}>incre</button>
        <button onClick={handledecre}>decre</button>
    </div>
  )
}

export default Counter