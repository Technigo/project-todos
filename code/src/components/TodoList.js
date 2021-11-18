import React from "react"
import { useDispatch, useSelector } from "react-redux"
import moment from 'moment'
import todos from '../reducers/todos'
import BtnDeleteAll from "./BtnDeleteAll"
import BtnCheckAll from "./BtnCheckAll"

const TodoList = () => {
    const items = useSelector((store) => store.todos.items)

    const dispatch = useDispatch()

    const onToggleTodo = (id) => {
        dispatch(todos.actions.toggleTodo(id))
    }

    const onDeleteTodo = (id) => {
        dispatch(todos.actions.deleteTodo(id))
    }

    const date = moment()

    return (
        <section className='main'>
            <section className='btns-container'>
                <BtnCheckAll />
                <BtnDeleteAll />  
            </section>
            {items.map((item, index) => (
                <section className='todo-container' key={item.id}>
                    <div className='flex-box'>
                        <label className='title-radio'>
                            <input
                                className='todo-radio'
                                type='checkbox'
                                checked={item.isComplete}
                                onChange={() => onToggleTodo(item.id)}
                                />
                                <div className="checkmark"></div>
                                <p>{item.text}</p>
                        </label>
                        <span className='date-time'>
                                    Created
                                    &nbsp;
                                    {/* {moment(item.weekday).format('ddd')}
                                    &nbsp; */}
                                    {moment(date).format('ddd')}
                                    &nbsp;
                                    {moment(item.createdAt).format('h:mm')}
                        </span>
                    </div>

                    <button 
                        className='delete-btn'
                        onClick={() => onDeleteTodo(item.id)}>
                       <i className="fas fa-minus-circle"/>
					</button>
                </section>
            ))}

        </section>
    )
}

export default TodoList

