import React from  'react'
import { useDispatch, useSelector } from "react-redux"
import { todos } from "reducers/todos"



export const StartPage = () => {
    const dispatch = useDispatch()
    const addTodo = useSelector((state) => state.quiz)
    
    return (
        <>
        {!stateQuiz.quizStart ? (
            <>
                <div className='background-stripes' style={{ backgroundImage: `url(${stripes})` }}>
                    <section className='firstpage-container'>
                    <div className='startpage-circle'>
                        <div className='firstpage-text'>
                            <p>8 questions</p>
                            <h1>About random stuff</h1>
                            <button
                                className="start-btn"
                                onClick={() => dispatch(quiz.actions.startTheQuiz())}
                                > Let&apos;s get started!
                            </button>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        ) : (
            <>
                <CurrentQuestion />
            </>
        )}
        </>
    )
}
