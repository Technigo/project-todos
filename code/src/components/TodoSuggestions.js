import React, { useState, useEffect } from 'react';



export const TodoSuggestions = () => {
  Accelerometer.setUpdateInterval(400);



  const [subscription, setSubscription] = useState(null);


  useEffect(() => {
    _subscribe();

    return () => _unsubscribe();
  }, []);

    const vibrateDevice = () => {
    Vibration.vibrate();
  }

  
const TodoSuggestionArray = [
    
  ]
  const [popcorn, setPopcorn] = useState(null);
  useEffect(() => {
    !isShaking(data) && setPopcorn(popcornArray[Math.floor(Math.random()*popcornArray.length)]);
   
  }, [isShaking(data)]);

  return (
    <>
    
    </>
  );
};