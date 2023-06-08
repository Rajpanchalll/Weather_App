import React, { useState, useEffect } from 'react';
import {GiAlarmClock} from 'react-icons/gi'
import {SlCalender} from 'react-icons/sl'

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const options = {
    timeZone: 'Asia/Kolkata',
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  const formattedTime = date.toLocaleTimeString('en-US', options);
  const formattedDate = date.toLocaleDateString('en-US', { timeZone: 'Asia/Kolkata' }); 

  return (
    <div className='flex'>
      <div className="time">
      <GiAlarmClock className='time_Icon'/>
      <h1>{formattedTime}</h1>
      </div>
      <div className="time">
      <SlCalender className='time_Icon'/>
      <h1>{formattedDate}</h1>
      </div>
      
    </div>
  );
}

export default Clock;
