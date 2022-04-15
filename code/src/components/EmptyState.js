import React, { useState } from 'react'
import styled from 'styled-components'

import TodoList from './TodoList'

import ArrowOne from '../assets/arrowone.svg'
import ArrowTwo from '../assets/arrowtwo.svg'
import ArrowThree from '../assets/arrowthree.svg'
import ArrowFour from '../assets/arrowfour.svg'
import addBtn from '../assets/add.svg'

const EmptyStateWrapper = styled.section`
	background: var(--clr-main);
	color: var(--clr-secondary);
	min-height: 80vh;
	display: flex;
	flex-direction: column;
	border-bottom-left-radius: 30px;
	border-bottom-right-radius: 30px;
`

const EmptyStateText = styled.p`
	font-size: 18px;
	margin: 0;
	padding: 1em 2em 5em;
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
	top: -45px;
	right: 45px;
	width: 130px;
`
const Arrowtwo = styled.img`
	position: absolute;
	top: -75px;
	left: 35px;
	width: 130px;
`
const Arrowthree = styled.img`
	position: absolute;
	top: -30px;
	left: 35px;
	width: 130px;
`
const Arrowfour = styled.img`
	position: absolute;
	top: -35px;
	right: 45px;
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
						All empty here! Click the button to add some new tasks or take a well deserved break!{' '}
					</EmptyStateText>
					<Imagewrapper>
						<ArrowWrapper>
							<Arrowone src={ArrowOne} alt='arrows'></Arrowone>
							<Arrowtwo src={ArrowTwo} alt='arrows'></Arrowtwo>
						</ArrowWrapper>
						<StartBtn onClick={onStartAdding}>
							<AddImg src={addBtn} alt='add task'></AddImg>
						</StartBtn>
						<ArrowWrapper>
							<Arrowthree src={ArrowFour} alt='arrows'></Arrowthree>
							<Arrowfour src={ArrowThree} alt='arrows'></Arrowfour>
						</ArrowWrapper>
					</Imagewrapper>
				</EmptyStateWrapper>
			)}
		</>
	)
}

export default EmptyState
