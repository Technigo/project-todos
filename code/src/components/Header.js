import React from 'react' 
import styled from 'styled-components'

const HeaderContainer = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
`;

export const Header = () => {
    //const items = useSelector((store) => store.todos.items)
    //const finishedTodos = items.filter((item) => item.isComplete)

    return (
        <HeaderContainer>
            <h1>Todo List <span role="img" aria-label="checkmark">✓</span></h1>
        </HeaderContainer>
    )
}