import React, { useState, useEffect } from 'react';

const CountdownTimer = ({parentFn, minutes}) => {
  const [seconds, setSeconds] = useState(minutes * 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
           // Timer reached zero, reset to double the initial value
        //    setSeconds(minutes * 60 * 2);
        //    console.log('Timer reached zero! Resetting to double the initial value.');
        //    return minutes * 60 * 2;

        clearInterval(intervalId);
        // You can add logic to perform an action when the timer reaches zero
        console.log('Timer reached zero!');
        parentFn();
        return 0;
        }
      });
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [minutes]);

  const displayTime = () => {
    const displayMinutes = Math.floor(seconds / 60);
    const displaySeconds = seconds % 60;
    return `${displayMinutes}:${displaySeconds < 10 ? '0' : ''}${displaySeconds}`;
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>Time Remaining: {displayTime()}</p>
    </div>
  );
};

export default CountdownTimer;
