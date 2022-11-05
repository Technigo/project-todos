import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components/macro';
import { MainSections, MainText, Devices } from '../styles/mainStyles';

const List = () => {
  const taskList = useSelector((state) => state.tasks.items);

  const dispatch = useDispatch();

  const onItemToggle = (event) => {
    dispatch(tasks.actions.toggleItem(event))
  }

  const onRemoveClick = (event) => {
    dispatch(tasks.actions.removeItem(event))
  }

  return (
    <ListSection>
      {taskList.map((singleItem, index) => {
        return (
          <ArticleWrapper key={singleItem.id}>
            <label htmlFor="tasks">
              <input
                type="checkbox"
                className="list-checkbox"
                name="tasks"
                id="tasks"
                value="tasks"
                checked={singleItem.completed}
                onChange={() => onItemToggle(singleItem.id)} />
            </label>
            <ListText>{singleItem.text}</ListText>
            <RemoveItemBtn
              type="button"
              onClick={() => onRemoveClick(index)}>🗑️
            </RemoveItemBtn>
            <DateText>{singleItem.createdAt}</DateText>

          </ArticleWrapper>
        )
      }).reverse()}

    </ListSection>
  )
}

export default List;

const ListSection = styled(MainSections)`
  padding: 2% 0%;
`

const ArticleWrapper = styled.article`
  background-color: white;
  border: double 2px darkgreen;
  border-radius: 4px;
  width: 90vw;
  display: grid;
  grid-template-columns: 10% 80% 10%;
  margin: 2%;
  padding: 1%;

  @media ${Devices.tablet} {
    width: 50vw;
  }
`

const DateText = styled(MainText)`
  color: darkgray;
  font-size: 0.8em;
  font-weight: bold;
  grid-column: 2;
  padding: 8% 0% 4% 0%;
`

const ListText = styled(MainText)`
  color: black;
`

const RemoveItemBtn = styled.button`
  background-color: white;
  border: none;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  text-align: center;
  transform: scale(1.4); 
  padding: 1%;
  justify-self: end;
  margin: 10%;
`