import React, { forwardRef } from "react";

const Pin = forwardRef(
  ({ maxChar, forwardFocusHandler, backSpaceHandler }, ref) => {
    const handleChange = (e) => {
      if (e.keyCode === 8) {
        backSpaceHandler(e);
      } else {
        forwardFocusHandler(e);
      }
    };
    return (
      <div>
        <input
          ref={ref}
          type="text"
          maxLength={maxChar}
          onKeyUp={(e) => handleChange(e)}
        />
      </div>
    );
  }
);
export default Pin;
