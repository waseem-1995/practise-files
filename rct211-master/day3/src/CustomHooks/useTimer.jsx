import React, { useEffect, useState } from "react";

export default function useTimer(delay) {
  const [timer, setTimer] = useState(false);
  console.log("sfsddfsd")
  useEffect(() => {
    const id = setTimeout(() => {
      setTimer(true);
    }, delay);
  }, []);
  return timer;
}
