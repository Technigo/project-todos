/* eslint-disable */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addList, addItem, toggleItem, togglePriority, deleteItem, sortItems, sortPriority, deleteList } from 'reducers/tasksproject';
import uniqid from 'uniqid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { compareAsc } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faPlus, faMinus, faFlag, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { TextInput, CounterText, ListHeaderButton, ProjectTitle, AddNewProjectContainer, AddButton, AddButton2, ProjectNameInput, ProjectNameContainer, ToDoForm, ToDoListWrapper, ToDoCard, ToDoInnerCard, ToDotext, ButtonsBox, DeleteButton, ProjectHeader, ProjectWrapper, FormButton } from './style/GlobalStyle';

export const ProjectToDoList = () => {
  const [projectCreated, setProjectCreated] = useState(false);
  const [listNameCreated, setListNameCreated] = useState(false);
  const [listName, setListName] = useState('');
  const [itemName, setItemName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [projectActive, setProjectActive] = useState(true);

  const lists = useSelector((state) => state.tasksproject.lists);

  const dispatch = useDispatch();

  const handleAddList = () => {
    dispatch(addList({ name: listName.charAt(0).toUpperCase() + listName.slice(1) }));
    setListName('');
    setListNameCreated(true)
    setProjectCreated(false)
  };

  const handleAddItem = (listIndex) => {
    const newToDo = {
      id: uniqid(),
      text: itemName[listIndex].charAt(0).toUpperCase() + itemName[listIndex].slice(1),
      due: dueDate ? dueDate.toDateString() : '-',
      complete: false,
      priority: false
    };
    dispatch(addItem({ listIndex, item: newToDo }));
    setItemName('');
  };

  const handleWantNewProject = () => {
    !projectCreated ? setProjectCreated(true) : setProjectCreated(!projectCreated)
  };

  const handleItemNameChange = (listIndex, value) => {
    setItemName({ ...itemName, [listIndex]: value });
  }

  const handleProjectClick = (listIndex) => {
    setProjectActive((prevProjectActive) => ({
      ...prevProjectActive,
      [listIndex]: !prevProjectActive[listIndex],
    }));
  };

  const onToDoToggle = (id, listIndex) => {
    dispatch(toggleItem({ listIndex, itemId: id }));
    dispatch(sortItems({ listIndex }));
    dispatch(sortPriority({ listIndex }));
}

  const onTogglePriority = (id, listIndex) => {
    dispatch(togglePriority({ listIndex, itemId: id }));
    dispatch(sortPriority({ listIndex }));
    dispatch(sortItems({ listIndex }));
  };

  const onToDoDelete = (id, listIndex) => {
    dispatch(deleteItem({ listIndex, itemId: id }));
  };

  const deleteListByName = (list) => {
    dispatch(deleteList({ name: list.name }));
  }

  const handleShowForm = () => {
    setShowForm(true)
  }

  const handleHideForm = () => {
    setShowForm(false)
  }

  const colorsArray = ['#3d5a80', '#b8dee0', '#79c9b0', '#e8e863', '#e4d1f1', '#831e74', '#ffccb8']
  const a = Math.floor(Math.random() * colorsArray.length);
  
  return (
    <>
      {listNameCreated && (
        <ProjectWrapper>
          {Array.isArray(lists) && lists.map((list, listIndex) => (
            <>
              <ProjectHeader key={list.name} style={{ background:`${colorsArray[a, listIndex]}`}}>
                <ProjectTitle>{list.name}</ProjectTitle>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CounterText>{list.items.length} tasks</CounterText>
                  <DeleteButton type="button" onClick={() => deleteListByName(list)}><FontAwesomeIcon icon={faTrashCan} style={{ color: '#f85f36', fontWeight: '300', fontSize: '15px' }} /></DeleteButton>
                  <ListHeaderButton type="button" onClick={() => handleProjectClick(listIndex)}>
                    {projectActive[listIndex] ? (
                      <FontAwesomeIcon icon={faChevronUp} style={{ color: '#f85f36', fontWeight: '300', fontSize: '25px' }} />)
                      : (<FontAwesomeIcon icon={faChevronDown} style={{ color: '#f85f36', fontWeight: '300', fontSize: '25px' }} />)}
                  </ListHeaderButton>
                  </div>
              </ProjectHeader>
              {projectActive[listIndex] && (
                <>
                  <ToDoListWrapper>
                    {list.items.map((item) => (
                      <ToDoCard key={item.text}>
                        <ToDoInnerCard>
                          <div className="container">
                            <div className="round">
                              <input
                                type="checkbox"
                                id={item.id}
                                name={item.id}
                                checked={item.complete}
                                onChange={() => onToDoToggle(item.id, listIndex)} />
                              <label htmlFor={item.id} />
                            </div>
                          </div>
                          <div>
                            <ToDotext key={item.id}>{item.text}</ToDotext>
                            <ToDotext>{compareAsc(new Date(item.due), Date.now()) === -1 ? 'overdue' : `due: ${item.due}`}</ToDotext>
                          </div>
                        </ToDoInnerCard>
                        <ButtonsBox>
                          <ListHeaderButton
                            type="button"
                            onClick={() => onTogglePriority(item.id, listIndex)}>
                            <FontAwesomeIcon icon={faFlag} style={{ color: item.priority ? '#f85f36' : '#464646' }} />
                          </ListHeaderButton>
                          <DeleteButton
                            type="button"
                            onClick={() => onToDoDelete(item.id, listIndex)}>
                            <span role="img" aria-label="delete">
                              ✖️
                            </span>
                          </DeleteButton>
                        </ButtonsBox>
                      </ToDoCard>
                    ))}
                  </ToDoListWrapper>
                  {showForm && ( 
                  <ToDoForm key={listIndex}>
                    <FormButton
                      type="button"
                      onClick={handleHideForm}>
                      <FontAwesomeIcon icon={faMinus} style={{ color: '#f85f36', fontWeight: '300', fontSize: '35px' }} />
                    </FormButton>
                    <label htmlFor="projecttodo">
                      <TextInput
                        type="text"
                        name="projecttodo"
                        value={itemName[listIndex] || ''}
                        onChange={(e) => handleItemNameChange(listIndex, e.target.value)} />
                    </label>
                    <div style={{
                      display: 'grid', gridGap: '20px',
                      gridTemplateColumns: 'repeat(2, 1fr)'
                    }}>
                      <div>
                        <DatePicker
                          id="datePicker"
                          selected={dueDate}
                          onChange={(date) => setDueDate(date)}
                          placeholderText="Due"
                          dateFormat="yyyy-MM-dd" />
                      </div>
                      <button
                        className="submit-button"
                        type="button"
                        onClick={() => handleAddItem(listIndex)}>
                        ADD TODO
                      </button>
                    </div>
                  </ToDoForm>)}
                  {!showForm && (
                    <FormButton
                      type="button"
                      onClick={handleShowForm}>
                      <FontAwesomeIcon icon={faPlus} style={{ color: '#f85f36', fontWeight: '300', fontSize: '35px' }} />
                    </FormButton>)}
                </>
              )}
            </>
          ))}
        </ProjectWrapper>)}
      {projectCreated && (
        <ProjectNameContainer>
          <ProjectNameInput
            type="text"
            value={listName}
            minLength="2"
            maxLength="12"
            placeholder='Your project name...'
            required
            onChange={(e) => setListName(e.target.value)} />
          <AddButton2
            type="button"
            onClick={handleAddList}>
            <FontAwesomeIcon icon={faPlus} style={{ color: '#f85f36', fontWeight: '300', fontSize: '25px' }} />
          </AddButton2>
        </ProjectNameContainer>)}
      <AddNewProjectContainer>
        <AddButton
          type="button"
          onClick={handleWantNewProject}>
          <p style={{ color: '#464646', fontWeight: '300', fontSize: '20px', hover: '#f85f36' }}>Create new project</p>
          <FontAwesomeIcon icon={faPlus} style={{ color: '#464646', fontWeight: '300', fontSize: '25px' }} />
        </AddButton>
      </AddNewProjectContainer>
    </>
  );
}

