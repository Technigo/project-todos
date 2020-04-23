import React from 'react'
import { useSelector } from 'react-redux'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
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
const TodoItem = styled(Container)`
  justify-content: space-evenly;
  background-color: ${props => props.theme.main};
  width: 25vw;
  margin: ${props => props.backside ? "0px" : "8px"};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  min-height: 111px;
  background-color: ${props => props.bg == 'work' ? "#FFBB00" : props.bg == 'personal' ? '#7CBB00' : props.bg == 'other' ? '#00A1F1' : ''};
`
  // default background color for TodoItem
  TodoItem.defaultProps = {
    theme: {
      main: "white"
    }
  }

  // Background color if item done is true
  const theme = {
    main: "mediumseagreen",
  };

const InfoSection = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
  width: 25vw;
  font-size: 10px;
`
const TodoSection = styled(Container)`
  width: 25vw;
`

export const ListItem = () => {
  const categoryFilter = useSelector((store) => store.todo.todoListItems.filter)
  const todoItems = useSelector((store) => {
    if (!categoryFilter) return store.todo.todoListItems.items
    else return store.todo.todoListItems.items.filter((item) => item.category === categoryFilter)
  })

  return (
    <Container>
      {todoItems.map((item, index) => (
        // Flippy container
        <Flippy
        flipOnHover={true} 
        flipOnClick={false} 
        flipDirection="horizontal" // horizontal or vertical
        >    
          {/* Front side of todo item */}
          <FrontSide
          style={{
            margin: '0px',
            padding: '0px',
            boxShadow: 'none',
          }}>

            <TodoItem theme={item.done ? theme : ''}>
              <InfoSection>
                <span>
                  Created at {item.startDate}
                </span>
              </InfoSection>

              <TodoSection>
                <h1>
                  {item.description}
                </h1>
              </TodoSection>

              <InfoSection>
                <span></span>
              </InfoSection>

            </TodoItem>
          </FrontSide>

          {/* Back side of todo item */}
          <BackSide
          style={{
          margin: '0px',
          padding: '0px',
          left: '8px',
          boxShadow: 'none',
          }}>
            <TodoItem theme={item.done ? theme : ''} backside bg={item.category}>
              <InfoSection>
                <span>
                  Created at {item.startDate}
                </span>
                {/* <span>
                  Due at {item.dueDate}
                </span> */}
              </InfoSection>

              <TodoSection>
                <h1>
                {item.category}
                </h1>
              </TodoSection>

              <InfoSection>
                <DeleteItem itemIndex={index} />
                {/* Create component to display green checkmark if done */}
                <SetDone itemIndex={index} />
              </InfoSection>

            </TodoItem>
          </BackSide>
        </Flippy>
      ))}
    </Container>
  )
}
