import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import Select from 'react-select';
import styled from 'styled-components';

import EmptyList from './EmptyList';
import TodoItem from './TodoItem';
import ActionBar from './ActionBar';
import { todos } from '../reducers/todos';
//import { visibilityFilter } from '../reducers/visibilityFilter';
import { Button } from '../library/Button';

const TodoList = () => {
  const dispatch = useDispatch();
  const list = useSelector(store => store.todos.list.items);
  const filterStatus = useSelector(
    store => store.todos.list.selectedStatusFilter
  );

  // const filterCategory = useSelector(
  //   store => store.todos.list.selectedCategoryFilter
  // );

  //const options = useSelector(store => store.todos.list.options);

  // const visibilityFilters = useSelector(
  //   store => store.visibilityFilter.list.options
  // );
  // console.log(visibilityFilters);
  // const filterCategory = useSelector(
  //   store => store.todos.list.selectedCategoryFilter
  // );
  // const categories = useSelector(store => store.todos.list.categories);
  //const [category, setCategory] = useState('');

  const onFilterByStatus = value => {
    console.log(value);
    dispatch(todos.actions.filterByStatus(value));
  };

  // const onFilterByCategory = value => {
  //   dispatch(todos.actions.filterByCategory(value.label));
  //   console.log(value.label);
  // };

  const filteredList = list.filter(item => {
    if (filterStatus === 'complete') {
      return item.isComplete;
    } else if (filterStatus === 'not complete') {
      return !item.isComplete;
    } else return item;
  });

  // const filteredList = list.filter(item => {
  //   if (filterCategory) {
  //     console.log(filterCategory);
  //     console.log(item.category);
  //     if (filterStatus === 'not complete') {
  //       return item.category === filterCategory && !item.isComplete;
  //     } else if (filterStatus === 'complete') {
  //       return item.category === filterCategory && item.isComplete;
  //     } else return item.category === filterCategory;
  //   } else if (filterStatus === 'complete') {
  //     return item.isComplete;
  //   } else if (filterStatus === 'not complete') {
  //     return !item.isComplete;
  //   } else ifreturn item;
  // });

  // const list = useSelector(store => {
  //   if (!category || category === 'all') return store.todos.list.items;
  //   else
  //     return store.todos.list.items.filter(item => item.category === category);
  // });
  // const categories = useSelector(store => store.todos.list.categories);

  return (
    <>
      <Main>
        {/* {options.map(option => (
          <>
            <ActionBarButton
              type="button"
              key={option.value}
              onClick={() => onFilterByStatus(option.value)}
            >
              {console.log(option)}
              <ActionBarText>{option.label}</ActionBarText>
            </ActionBarButton>
          </>
        ))} */}
        <ActionBarContainer>
          <ActionBarButton
            type="button"
            value="all"
            onClick={() => onFilterByStatus('all')}
          >
            <ActionBarText>All</ActionBarText>
          </ActionBarButton>
          <ActionBarButton
            type="button"
            value="complete"
            onClick={() => onFilterByStatus('complete')}
          >
            <ActionBarText>Complete</ActionBarText>
          </ActionBarButton>
          <ActionBarButton
            type="button"
            value="not complete"
            onClick={() => onFilterByStatus('not complete')}
          >
            <ActionBarText>Not Complete</ActionBarText>
          </ActionBarButton>
        </ActionBarContainer>
        {/* <label htmlFor="category">Choose a category:</label> */}
        {/* <select
          name="category"
          id="category"
          onChange={event => setCategory(event.target.value)}
          value={category}
        >
          <option value="">Filter by:</option>
          <option value="all">All</option>
          {categories.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select> */}
        {/* <CustomSelect
          options={options}
          onChange={onFilterByCategory}
          placeholder="Select a category"
          //styles={customStyles}
          theme={theme => ({
            ...theme,
            border: 'none',
            borderRadius: 0,
            backgroundColor: 'transparent',
            color: '#fff',
            colors: {
              ...theme.colors,
              primary25: '#7E77CC',
              primary: '#5C52AC',
            },
          })}
        /> */}
        {list.length === 0 ? (
          <EmptyList />
        ) : (
          <>
            <ListSection>
              {filteredList.map(item => (
                <TodoItem key={item.id} item={item} />
              ))}
            </ListSection>
            {/* <RemoveButton /> */}
          </>
        )}
      </Main>
      <ActionBar />
    </>
  );
};

export default TodoList;

const Main = styled.main`
  display: grid;
  width: 100%;
  max-height: 100%;
  overflow-y: scroll;
`;

const ListSection = styled.section`
  display: grid;
  padding: 0 25px;
  margin: 0 auto;
  max-width: 600px;
  background-color: #f4f5fa;
  max-height: 100%;
  overflow-y: scroll;
`;

const ActionBarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: #fff;
`;

const ActionBarButton = styled(Button)`
  background: #fff;
  border-radius: 0;
  font-size: 0.8rem;
  font-weight: 500;
  box-sizing: border-box;
  transition: all 0.1s ease 0s;
  color: #808080;

  :hover {
    border-bottom: 1px solid red;
    color: red;
  }

  :focus {
    border-bottom: 1px solid red;
    color: red;
  }

  :active {
    border-bottom: 1px solid red;
    color: red;
  }
`;

const ActionBarText = styled.p``;

// const CustomSelect = styled(Select)`
//   /* width: 100%; */
// `;
