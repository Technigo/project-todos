import React from 'react'
import { Header } from '../components/Header'
import { AddTask } from '../components/AddTask'
import { Task } from '../components/Task'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <main>
      <Header />
      <AddTask />
    </main>
  )
}
