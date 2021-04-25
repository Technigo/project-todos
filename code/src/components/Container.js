import React from 'react'
import { useSelector } from 'react-redux'
import FlipMove from "react-flip-move"

import StartHeader from 'components/StartHeader'
import Header from 'components/Header'
import TodoList  from 'components/TodoList'
import Input from 'components/Input'

export const Container = () => {
  const items = useSelector((store) => store.todos.items)

  if(items.length === 0) {
    return(
      <main>
        <StartHeader />
        <lottie-player
          src='https://assets3.lottiefiles.com/packages/lf20_jy1bgnpp.json' 
          speed='1'
          loop
          autoplay>
      </lottie-player>
      </main>
    )
  } else if (items) {
      return(
        <FlipMove duration={250} easing='ease-in'>
          <main>
            <Header />
            <section className='todo'>
              <TodoList />
              <Input />
            </section>
          </main>
        </FlipMove>
      ) 
    }
  }