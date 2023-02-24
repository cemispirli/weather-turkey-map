import React, { useState } from 'react';



function ClockComp() {

  let time = new Date().toLocaleTimeString();

  const [currentTime,setCurrentTime] = useState(time);
  
  function Time(){
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }

  setInterval(Time,1000);

  return (
    <div className="App1">
    <h1>{currentTime}</h1>
    </div>
  );
}

export default ClockComp;
