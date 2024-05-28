import { useEffect, useRef, useState } from "react";

export default function CountdownTimer({ initialTime, onTimeFinish }) {
  // whenever the timer is finished,then onTimefinish will do some functionality
  const [time, setTime] = useState(initialTime);
  // to check the timer is running or not
  const [isrunning, setIsrunning] = useState(true);
  const intervalReference = useRef();
  useEffect(() => {
    if (isrunning) {
      // manage a setinterval
      // if isrunning is true,we are settng a interval for 1s
      intervalReference.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            // when prevtime is 0,will make setIsrunning false and clear the intervalReference
            clearInterval(intervalReference.current);
            setIsrunning(false);
            // when prevtime is 0,then we are triggering onTimeFinish
            // this onTimeFinish functionalty will handle from parent component
            if (onTimeFinish) {
              onTimeFinish();
            }
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      // when time is already completed
      clearInterval(intervalReference.current);
    }
    // when component is unmount
    return () => {
      clearInterval(intervalReference.current);
    };
  }, [isrunning, onTimeFinish]);

  // converting sec into minssec
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handlePauseandResume = () => {
    setIsrunning(!isrunning);
  };
  const handleReset = () => {
    clearInterval(intervalReference.current);
    setTime(initialTime);
    setIsrunning(false);
  };
  const handleStart = () => {
    setIsrunning(true);
  };

  return (
    <div className="timer">
      <p>
        {/*The padStart() method pads a string from the start.The padStart()
        method pads a string with another string (multiple times) until it
        reaches a given length. */}
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </p>
      <div className="timer-btns">
        <button onClick={handlePauseandResume}>
          {isrunning ? "Pause" : "Resume"}
        </button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleStart}>Start</button>
      </div>
    </div>
  );
}
