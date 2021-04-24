import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import Checkbox from "react-custom-checkbox";
import { FiCheck } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";

import tasks from '../reducers/tasks'

const TaskWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  @media (min-width: 1024px) {
    max-width: 700px;
  }
`

const Task = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  width: 86%;
  border: 1px solid #fafafa;
  border-radius: 50px;
  padding: 10px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.1);
  margin-bottom: 15px;
  padding-right: 20px;
`

const DescriptionCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
  margin-left: 10px;
`

const TaskDescription = styled.p`
  margin: 0;
  margin-left: 15px;
  padding: 10px;
  font-size: 18px;
  color: #757575;
  text-decoration: ${(props) => props.checked ? "line-through" : "none"};
`

const IconContainer = styled.div`
  display: flex;
  background-color: #50E3A4;
`

const TaskList = () => {
  const items = useSelector((store) => store.tasks.items)

  const dispatch = useDispatch()

  return (
    <TaskWrapper>
      {items.map((task) => (
        <Task key={task.id}>
          <DescriptionCheckbox>
            <Checkbox
              checked={task.isCompleted}
              onChange={() => dispatch(tasks.actions.toggleCheckbox(task.id))}
              icon={
                <IconContainer>
                  <FiCheck color="white" size={20} />
                </IconContainer>
              }
              borderColor="#50E3A4"
              borderRadius={20}
              style={{ overflow: "hidden" }}
              containerStyle={{ alignSelf: "center" }}
              size={20} />
            <TaskDescription checked={task.isCompleted}>{task.description}</TaskDescription>
          </DescriptionCheckbox>
          <TiDeleteOutline size={20} onClick={() => dispatch(tasks.actions.removeTask(task.id))} />
        </Task>
      ))}
    </TaskWrapper>
  )
}
export default TaskList
