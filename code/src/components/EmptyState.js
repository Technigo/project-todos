import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import AddTodo from './AddTodo'

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
`

const EmptyStateImg = styled.img`
	width: 250px;
`

const EmptyState = () => {
	const dispatch = useDispatch()
	const onStartAdding = () => {
		{
			//toggla startGame:true (add StartGame && in TodoList)
		}
	}

	return (
		<EmptyStateWrapper>
			<EmptyStateText>
				It seems like you’ve completed all your tasks! Click the button to add
				some new ones or take a well deserved break!{' '}
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
	)
}

export default EmptyState
