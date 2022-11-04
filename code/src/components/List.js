import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components/macro';
import { MainSections, MainText } from '../styles/mainStyles';

// Add a sorting, date.

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
    <MainSections>
      {taskList.map((singleItem, index) => {
        return (
          <ArticleWrapper key={singleItem.id}>
            <label htmlFor="tasks">
              <input
                type="checkbox"
                name="tasks"
                id="tasks"
                value="tasks"
                checked={singleItem.completed}
                onChange={() => onItemToggle(singleItem.id)} />
            </label>
            <ListText>{singleItem.text}</ListText>
            <ListText>{singleItem.createdAt}</ListText>
            <RemoveItemBtn
              type="button"
              onClick={() => onRemoveClick(index)}>X
            </RemoveItemBtn>
          </ArticleWrapper>
        )
      }).reverse()}

    </MainSections>
  )
}

export default List;

const RemoveItemBtn = styled.button`
  background-color: #FB84A1;
  border: solid 1px black;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  text-align: center;
  width: 20px;
  height: 20px;
`

const ArticleWrapper = styled.article`
  border: solid 2px red;
  width: 100vw;
  display: flex;
  justify-content: space-around;
`

const ListText = styled(MainText)`
  color: black;
`