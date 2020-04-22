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
  margin: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
// default background color for TodoItem
TodoItem.defaultProps = {
  theme: {
    main: "white"
  }
}

// Background color if item done is true
const theme = {
  main: "mediumseagreen"
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
  const todo = useSelector((store) => store.todo.todoListItems)

  return (
 



    <Container>
      {todo.items.map((item, index) => (
        <Flippy
        flipOnHover={true} // default false
        flipOnClick={false} // default false
        flipDirection="horizontal" // horizontal or vertical
        style={{ padding: '0em' }} 
        >    
        <FrontSide>
        <TodoItem theme={item.done ? theme : ''}>
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
            <span>{item.category}</span>
          </TodoSection>

          <InfoSection>
            <DeleteItem itemIndex={index} />
            {/* Create component to display green checkmark if done */}
            <SetDone itemIndex={index} />
          </InfoSection>

        </TodoItem>
      </FrontSide>

          <BackSide>
            ROCKS
          </BackSide>
        </Flippy>
      ))}
    </Container>
  )
}


// <p>{item.description}</p>
// <p>{item.category}</p>
// <p>{item.startDate}</p>
// <p>{item.dueDate}</p>