import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import Pin from "../Components/Pin";
export default function PinTab({ length, maxChar, setOtp }) {
  const [PinLength] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);
  const [otpVal] = useState(new Array(length).fill(""));
  console.log(otpVal);
  const backSpaceHandler = (e, index) => {
    otpVal[index] = e.target.value;
    if (e.target.value.length >= 0 && index > 0) {
      inputRef.current[index - 1].focus();
      setOtp(otpVal.join(""));
    }
  };
  const forwardFocusHandler = (e, index) => {
    otpVal[index] = e.target.value;
    if (e.target.value.length >= maxChar && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    setOtp(otpVal.join(""));
  };
  const handleChange = (e, index) => {
    if (e.keyCode === 8) {
      backSpaceHandler(e, index);
    } else {
      forwardFocusHandler(e, index);
    }
  };
  const handlePaste = (e) => {
    console.log(e.clipboardData.getData("Text"));
    let data = e.clipboardData.getData("Text").split("");
    data = data.filter((_, el) => {
      return el < length;
    });
    data.forEach((el, i) => {
      otpVal[i] = el;
      inputRef.current[i].value = el;
      if (e.target.value.length >= maxChar && i < length - 1) {
        inputRef.current[i + 1].focus();
      }
    });
    setOtp(otpVal.join(""));
    // console.log();
  };
  return (
    <div
      onPaste={handlePaste}
      style={{ display: "flex", justifyContent: "center" }}
    >
      {PinLength.map((_, index) => (
        <Pin
          ref={(e) => {
            inputRef.current[index] = e;
          }}
          key={index}
          maxChar={maxChar}
          backSpaceHandler={(e) => backSpaceHandler(e, index)}
          forwardFocusHandler={(e) => forwardFocusHandler(e, index)}
        />
      ))}
    </div>
  );
}
//This is to give warning to user that this prop is necessary,it will not break ther xcomponent but give warning
PinTab.propTypes = {
  length: PropTypes.number.isRequired,
  maxChar: PropTypes.number.isRequired,
};
//  {/* <input

//           ref={(e) => {
//             inputRef.current[index] = e;
//           }}
//           //   ref={inputRef.current.focus()}
//           //   onChange={(e)=>handleChange(e,index)}
//           onKeyUp={(e) => handleChange(e, index)}

//           type="text"

//         />
