/* eslint-disable linebreak-style */

import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useSelector } from 'react-redux';

export const LazyCat = () => {
  const amountOfTasks = useSelector((store) => store.todos.items);
  const amountOfCompleted = amountOfTasks.filter((task) => task.isDone)
  return (
    <section>
      <p>{amountOfCompleted.length} / {amountOfTasks.length} </p>
      <Player
        autoplay
        loop
        src="https://lottie.host/e1545cc9-29b0-4fc7-bf99-cba9800c4de6/LHo0WS7dLJ.json"
        style={{ height: '150px', width: '150px' }}>
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    </section>
  )
}