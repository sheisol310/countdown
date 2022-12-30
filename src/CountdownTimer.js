import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import './CountdownTimer.css';

function CountdownTimer() {
  // const currentDate = new Date();
  // const newYear = new Date(currentDate.getFullYear() + 1, 0, 1); // January 1st of the next year
  // const remainingTime = Math.floor((newYear - currentDate) / 1000); // remaining time in seconds
  const remainingTime = 3

  const [time, setTime] = useState(remainingTime);
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000); // Decrement time by 1 second every 1000 milliseconds (1 second)

    if (time === 0) {
      navigate("/photo");
    }

    return () => clearInterval(interval);
  }, [time]);

  const days = Math.floor(time / (3600 * 24));
  const hours = Math.floor((time % (3600 * 24)) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    // <div>
    //   {days} days, {hours} hours, {minutes} minutes, {seconds} seconds remaining
    // </div>

    <div className="countdown-timer">
      <span>{days}</span>
      <span>days</span>
      <span className="two-numbers">{hours}</span>
      <span>hours</span>
      <span className="two-numbers">{minutes}</span>
      <span>minutes</span>
      <span className="two-numbers">{seconds}</span>
      <span>seconds</span>
    </div>
  );
}

export default CountdownTimer;
