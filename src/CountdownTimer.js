import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const currentDate = new Date();
  const newYear = new Date(currentDate.getFullYear() + 1, 0, 1); // January 1st of the next year
  const remainingTime = Math.floor((newYear - currentDate) / 1000); // remaining time in seconds

  const [time, setTime] = useState(remainingTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000); // Decrement time by 1 second every 1000 milliseconds (1 second)

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(time / (3600 * 24));
  const hours = Math.floor((time % (3600 * 24)) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div>
      {days} days, {hours} hours, {minutes} minutes, {seconds} seconds remaining
    </div>
  );
}

export default CountdownTimer;
