import React, { useRef, useState } from 'react'
import PropTypes from "prop-types"
import Printitem from './Printitem';
const Pin = ({length,OtpHandelar}) => {
    const [inputBox]=useState(new Array(length).fill(1));
    const [inputBoxValue,setinputBoxValue]=useState(new Array(length).fill(""))
    const inputref=useRef([])
    const handelChange=(e,index)=>{
        inputBoxValue[index]=e.target.value;
        setinputBoxValue(inputBoxValue)
        if(e.target.value.length>0 && index<length-1){
            inputref.current[index+1].focus();
        }
        // console.log(inputBoxValue);
        OtpHandelar(inputBoxValue.join(""))
    }
    const handelBackSpace=(e,index)=>{
        if(index>0){
            inputref.current[index-1].focus(); 
        }
        inputBoxValue[index]=e.target.value;
        setinputBoxValue(inputBoxValue);
        OtpHandelar(inputBoxValue.join(""))
    }
    const handelPaste=(e)=>{
        e.preventDefault();
        const data=e.clipboardData
        .getData("text")
        .split("")
        .filter((item,index)=>index<length);
        data.forEach((value,index)=>{
            inputBoxValue[index]=value;
            inputref.current[index].value=value;

            if(index<length-1){
                inputref.current[index+1].focus();
            }
        })

    }
  return (
    <div style={{display:"flex",justifyContent:"center"}}
    onPaste={handelPaste}>
        {inputBox.map((item,index)=>(
            <Printitem key={index} 
            changeHandeler={(e)=>handelChange(e,index)}
            BackSpaceHandeler={(e)=>handelBackSpace(e,index)}
            ref={(element)=>{inputref.current[index]=element}}/>  
        ))}
    </div>
  )
}
Pin.prototypes={
    length:PropTypes.number.isRequired,
    onChange:PropTypes.func
}
export default Pin