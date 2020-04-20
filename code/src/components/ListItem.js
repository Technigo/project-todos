import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { DeleteItem } from 'components/DeleteItem'
import { SetDone } from 'components/SetDone'

const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`
// This should change bg color depending of category
const TodoItem = styled(Container)`
  justify-content: space-evenly;
  background-color: white;
  width: 25vw;
  margin: 8px;
`
const InfoSection = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
  width: 25vw;
`
const TodoSection = styled(Container)`
  width: 25vw;
`

export const ListItem = () => {
  const todo = useSelector((store) => store.apa.todoListItems)

  return (
    <Container>
      {todo.items.map((item, index) => (
        <TodoItem>
          <InfoSection>
            <span>
              Created at {item.startDate}
            </span>
            <span>
              Due at {item.dueDate}
            </span>
          </InfoSection>

          <TodoSection>
            <h1>
              {item.description}
            </h1>
          </TodoSection>

          <InfoSection>
            <DeleteItem itemIndex={index} />
            {/* Create component to display green checkmark if done */}
            <SetDone itemIndex={index} />
          </InfoSection>

        </TodoItem>
      ))}
    </Container>
  )
}


// <p>{item.description}</p>
// <p>{item.category}</p>
// <p>{item.startDate}</p>
// <p>{item.dueDate}</p>