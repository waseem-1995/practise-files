import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [mins, setMins] = useState(0);

  let ref = useRef(null)
  
  useEffect(() => {
    let id;
    id = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (mins == 0) {
          clearInterval(id);
        } else {
          setMins(mins - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };
  });

  const handleSubmit = () => {
      let x = ref.current.value
      setMins(+x)
  }

  const handleStop = () => {
      setMins(0)
      setSeconds(0)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Minutes..."
        ref={ref}
      />
      <br />
      <h1>{mins}m : {seconds}s</h1>
      <br />
      <button onClick={handleSubmit}>Start</button>
      <button onClick={handleStop}>Reset</button>
    </div>
  );
};

export default Timer;
