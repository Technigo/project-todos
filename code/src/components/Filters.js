import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { visibilityFilter } from 'reducers/visibilityFilter';

const StyledFilters = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 30px 30px;
  grid-gap: 0.5rem;
  justify-content: center;
  padding: 0.4rem;

  @media screen and (min-width: 326px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 30px;
  }
`;

const Button = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${props =>
    props.activeFilter ? 'rgba(230, 0, 60, 1)' : 'rgba(0, 0, 0, 0.02)'};
  border-radius: 10px;
  color: ${props => (props.activeFilter ? '#FFF' : 'rgba(230, 0, 60, 1)')};
  padding: 0.3rem 0.5rem;
  font-size: 0.7rem;
  outline: none;
  font-weight: bold;

  &:disabled {
    opacity: 0.5;
  }

  &:hover:enabled {
    background-color: rgba(230, 0, 60, 1);
    color: white;
    transition: all 150ms ease-in-out;
    cursor: pointer;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  padding-left: 0.4rem;

  i {
    color: rgba(230, 0, 60, 1);
  }
`;

export const Filters = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.visibilityFilter);

  const countAll = useSelector(state => state.todos);
  const countActive = useSelector(state =>
    state.todos.filter(todo => todo.completed !== true)
  );
  const countCompleted = useSelector(state =>
    state.todos.filter(todo => todo.completed === true)
  );
  const countPinned = useSelector(state =>
    state.todos.filter(todo => todo.pinned === true)
  );

  return (
    <StyledFilters>
      <Button
        onClick={() =>
          dispatch(
            visibilityFilter.actions.setVisibility({ filter: 'SHOW_ALL' })
          )
        }
        disabled={countAll.length === 0}
        activeFilter={filter === 'SHOW_ALL'}
      >
        All ({countAll.length})
      </Button>
      <Button
        onClick={() =>
          dispatch(
            visibilityFilter.actions.setVisibility({ filter: 'SHOW_ACTIVE' })
          )
        }
        disabled={countActive.length === 0}
        activeFilter={filter === 'SHOW_ACTIVE'}
      >
        Active ({countActive.length})
      </Button>
      <Button
        onClick={() =>
          dispatch(
            visibilityFilter.actions.setVisibility({ filter: 'SHOW_COMPLETED' })
          )
        }
        disabled={countCompleted.length === 0}
        activeFilter={filter === 'SHOW_COMPLETED'}
      >
        Completed ({countCompleted.length})
      </Button>
      <Button
        onClick={() =>
          dispatch(
            visibilityFilter.actions.setVisibility({ filter: 'SHOW_PINNED' })
          )
        }
        disabled={countPinned.length === 0}
        activeFilter={filter === 'SHOW_PINNED'}
      >
        Pinned ({countPinned.length})
      </Button>
    </StyledFilters>
  );
};
