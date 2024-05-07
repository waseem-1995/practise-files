import { useEffect, useRef, useState } from "react";

export const Timer = () => {
  const [time, settime] = useState(1);
  const timerid = useRef(null);
  

  const [count, setCount] = useState(0);

  const start = () => {
    if(!timerid.current){
       var id = setInterval(() => {
      setCount((prev) => {
        return prev + 1;
      });
    }, 60);
    timerid.current = id
    }

  }
   
  const pause = () => {
    clearInterval(timerid.current);
    timerid.current = null;
  }
 
  const restart = () => {
    clearInterval(timerid.current);
    setCount(0);
    timerid.current = null;
  }
  useEffect(() => {
    function secondsToTime(secs) {
      var hours = Math.floor(secs / (60 * 60));
      var bag = hours + "m";
      var divisor_for_minutes = secs % (60 * 60);
      var minutes = Math.floor(divisor_for_minutes / 60);
      var divisor_for_seconds = divisor_for_minutes % 60;
      var seconds = Math.ceil(divisor_for_seconds);
      if (hours === 0) {
        bag = "";
      }
      settime(bag + minutes + "s "+ seconds);
    }
    secondsToTime(count);
  }, [count]);
  return (
    <div className="App">
      <div>{time}</div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>pause</button>
      <button onClick={restart}>Restart</button>
    </div>
  );
};
