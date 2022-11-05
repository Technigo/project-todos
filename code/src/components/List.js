import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components/macro';
import { MainSections, MainText, Devices } from '../styles/mainStyles';
import Sloth from './sloth.png';

const List = () => {
  const taskList = useSelector((state) => state.tasks.items);

  const dispatch = useDispatch();

  const onItemToggle = (event) => {
    dispatch(tasks.actions.toggleItem(event))
  }

  const onRemoveClick = (event) => {
    dispatch(tasks.actions.removeItem(event))
  }

  const renderList = () => {
    if (taskList.length === 0) {
      return (
        <MainSections>
          <TextWhenEmpty>Nothing to do, just hang loose!</TextWhenEmpty>
          {/* Image by Colleen ODell from Pixabay */}
          <ImageWhenEmpty src={Sloth} alt="" />
        </MainSections>
      )
    } else {
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
  }

  return (
    <>
      {renderList()}
    </>
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
    width: 40vw;
  }
`

const DateText = styled(MainText)`
  color: darkgray;
  font-size: 0.8em;
  font-weight: bold;
  grid-column: 2;
  padding: 8% 0% 4% 0%;

  @media ${Devices.tablet} {
    padding: 5% 0% 2% 0%;
  }
`

const ListText = styled(MainText)`
  color: black;

  @media ${Devices.tablet} {
    justify-self: start;
    text-align: left;
  }
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

const TextWhenEmpty = styled(MainText)`
  color: black;
  color: #5f6638;
  font-size: 1em;
  margin-bottom: 1%;
  
  @media ${Devices.tablet} {
    font-size: 1.2em;
    justify-self: start;
    text-align: left;
    padding-left: 4%;
  }
`

const ImageWhenEmpty = styled.img`
  filter: invert(50%) sepia(80%);
  width: 50%;
  align-self: center;
  justify-self: center;
  padding-left: 20%;

  @media ${Devices.tablet} {
    width: 18%;
    padding-left: 5%;
  }
`