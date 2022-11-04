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
    <MainSections>
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
            <RemoveItemBtn
              type="button"
              onClick={() => onRemoveClick(index)}>X
            </RemoveItemBtn>
            <ListText>{singleItem.text}</ListText>
            <ListText>{singleItem.createdAt}</ListText>

          </ArticleWrapper>
        )
      }).reverse()}

    </MainSections>
  )
}

export default List;

const ArticleWrapper = styled.article`
  border: double 2px lightgray;
  border-radius: 4px;
  width: 95vw;
  display: grid;
  grid-template-columns: 70% 30%;
  margin: 2%;

  @media ${Devices.tablet} {
  width: 50vw;
  }
`

const ListText = styled(MainText)`
  color: black;
`

const RemoveItemBtn = styled.button`
  background-color: darkslategray;
  border: solid 1px black;
  border-radius: 4px;
  color: red;
  font-weight: bold;
  text-align: center;
  width: 20px;
  height: 20px;
  justify-self: end;
  margin: 3%;
`