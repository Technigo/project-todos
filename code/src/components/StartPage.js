import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Completed from 'components/Completed'
// import styled from 'styled-components'

import pokemons from 'reducers/tasks'

const StartPage = () => {

    const tasksList = useSelector((todos) => todos.tasks.items)

    const dispatch = useDispatch()
    const onPokemonToggle = (taskId) => {
        dispatch(pokemons.actions.toggleItem(taskId))
    }

    return (
        <section>
            
            <h1>Todo list will be here</h1> 

            
        <Completed />
            
            
            {tasksList.map(taskItem => (

                <article>
                    <h2>{taskItem.name}</h2>
                    
                    <label>
                       Is done:
                    <input 
                    type="checkbox" 
                    checked={taskItem.isDone} 
                    onChange={() => onPokemonToggle(taskItem.id)} />
                    </label>

                    <button className="btn">
                        All done
                    </button>

                </article>

            ))}
            
            </section>

    )

}

export default StartPage