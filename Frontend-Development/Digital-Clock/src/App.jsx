import React, { useState, useEffect } from "react";

import './App.css';

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  let hour = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return (
    <div className="clock-container">
      <h1>Welcome to EK's Digital Clock App !</h1>
      <h1 id="clock">
        {hour}-{minutes}-{seconds}
      </h1>
      <a href="https://github.com/Elango-Kannan-00/Digital-Clock.git" target="_blank" className="button">Source Code</a>
    </div>
  );
};

export default App;
