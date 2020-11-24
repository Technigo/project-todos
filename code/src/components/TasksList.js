// import React from 'react'
// import {useDispatch, useSelector} from 'react-redux'

// import {Item} from './Item'
// import styled from 'styled-components'
// import {tasks} from 'reducers/tasks'

// const ListContainer = styled.ul`
// displa:flex;
// width:100%;
// flex-direction:column;
// `;

// const ListActionButton = styled.button`
// align-self:center;
// padding:4px;
// margin:2px;
// font-size:22px;
// background-color:#B0D0D3;
// border: none;
// color: #C08497;
// cursor:pointer;
// text-align:center;
// ;`

// export const TasksList = () => {
// 	const dispatch = useDispatch()
// 	const items = useSelector((store) => store.tasks.items)

// return (
// 	<ListContainer>
// 	{items.map((item, index)=> (
// 	<Item key={index} item={item}></Item>
// 	))}
// 	<ListActionButton onClick={() => dispatch(tasks.actions.removeOne())}>remove one</ListActionButton>
// 	</ListContainer>
// )
// }