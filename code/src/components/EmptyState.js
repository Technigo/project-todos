import React, { useState } from 'react'
import styled from 'styled-components'

import TodoList from './TodoList'

import ArrowOne from '../assets/arrowone.svg'
import ArrowTwo from '../assets/arrowtwo.svg'
import Empty from '../assets/empty.svg'
import addBtn from '../assets/add.svg'

const EmptyStateWrapper = styled.section`
	background: var(--clr-main);
	color: var(--clr-secondary);
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
`

const EmptyStateText = styled.p`
	font-size: 18px;
	margin: 0;
	padding: 1em 2em 3em;
	text-align: center;
	max-width: 30ch;
	align-self: center;
	letter-spacing: 1.5px;
	line-height: 1.4em;
`

const Imagewrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const ArrowWrapper = styled.div`
	position: relative;
`

const Arrowone = styled.img`
	position: absolute;
	top: -35px;
	right: 45px;
	width: 130px;
`
const Arrowtwo = styled.img`
	position: absolute;
	top: -50px;
	left: 35px;
	width: 130px;
`

const StartBtn = styled.button`
	position: relative;
	border: none;
	background: transparent;
	cursor: pointer;
	padding-bottom: 2em;
`

const AddImg = styled.img`
	border: none;

	&:hover {
		transform: scale(1.3);
		transition: all 0.45s ease-in;
	}
`

const EmptyStateImg = styled.img`
	width: 250px;
`

const EmptyState = () => {
	const [startTodo, setStartTodo] = useState(false)

	const onStartAdding = () => {
		setStartTodo(true)
	}

	return (
		<>
			{startTodo && <TodoList />}
			{!startTodo && (
				<EmptyStateWrapper>
					<EmptyStateText>
						All empty here! Click the button to add some new tasks or take a
						well deserved break!{' '}
					</EmptyStateText>
					<Imagewrapper>
						<ArrowWrapper>
							<Arrowone src={ArrowOne} alt='arrows'></Arrowone>
							<Arrowtwo src={ArrowTwo} alt='arrows'></Arrowtwo>
						</ArrowWrapper>
						<StartBtn onClick={onStartAdding}>
							<AddImg src={addBtn} alt='add task'></AddImg>
						</StartBtn>
						<EmptyStateImg src={Empty} alt='no tasks'></EmptyStateImg>
					</Imagewrapper>
				</EmptyStateWrapper>
			)}
		</>
	)
}

export default EmptyState
