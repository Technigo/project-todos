import React from "react"
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
import { ToDoItem } from './ToDoItem'
import { EmptyDisplay } from './EmptyDisplay'
import { TextButton } from '../lib/TextButton'
import { FlexColumn } from '../lib/FlexColumn'
import Bounce from 'react-reveal/Bounce'
import LightSpeed from 'react-reveal/LightSpeed'
import img from '../Assets/dropdown.svg'

const FolderContainer = styled.div`
  width: 100%;
  border-bottom: 3px solid #f0f0f0;
  padding: 16px;  
   display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.backgroundColor};
  font-size: 20px;
  color: #a3a3a3;
  transition: all 1s ease-in-out;
  &:hover {
      background-color: papayawhip;
  }
`

const LeftSideContainer = styled.div`
display: flex;
align-items: center;
`

const FolderButton = styled.button`
  font-size: ${(props) => props.fontSize};
  color: #a3a3a3;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  @media (min-width: 1024px) {
      font-size: 20px;
  }
`

const ButtonText = styled.span`
  width: 100px;
  @media (min-width: 660px) {
      width: 250px;
  }
`

const Image = styled.img`
height: 20px;
width: 20px;
margin-right: 8px;
`

const Dot = styled.div`
  background-color: red;
  border-radius: 100%;
  height: 10px;
  width: 10px;
`
const Dropdown = styled.select`
background: transparent;
    margin: 0;
    line-height: 1;
    border: 0;
    padding: 0;
    border-radius: 0;
    width: 130%;
    z-index: 10;
    font-size: 13px;
    color: black;
`
const DropdownContainer = styled.div`
display: block;
font-size: 13px;
  padding: 8px 14px 8px 5px;
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow-x: hidden;
   background-image: url(${img});
   background-repeat: no-repeat;
   background-size: 20px;
   background-position: 95% center;
   margin-left: 8px;
`
export const CategoryMap = () => {
    const dispatch = useDispatch()
    const folders = useSelector((store) => store.todos.list.categories)

    const openFolder = (itemIndex, item) => {
        dispatch(
            todos.actions.revealItem({ itemIndex: itemIndex, reveal: !item.reveal })
        )
    }

    const sortFolder = (value, index) => {
        dispatch(
            todos.actions.sortFolder({ itemIndex: index, sortOrder: value })
        )

    }

    const clearFolder = (index) => {
        dispatch(
            todos.actions.clearFolder({ itemIndex: index })
        )
    }

    const removeCategory = (index) => {
        dispatch(
            todos.actions.removeCategory({ itemIndex: index })
        )
    }

    return (
        folders.map((folder, index) => {
            const sortByCreated = folder.items.filter(x => x.created)
            sortByCreated.sort((a, b) => (a.done === b.done) ? ((a.created > b.created) ? 1 : -1) : a.done ? 1 : -1)
            const unFinished = folder.items.filter(x => !x.done)
            const dueDateArray = folder.items.filter((x => x.dueDate))
            dueDateArray.sort((a, b) => (a.done === b.done) ? ((a.dueDate > b.dueDate) ? 1 : -1) : !a.done ? 1 : -1)
            const noDateArray = folder.items.filter((x => !x.dueDate))
            const sortByDueDate = dueDateArray.concat(noDateArray)
            sortByDueDate.sort((a, b) => (a.done === b.done) ? 0 : a.done ? 1 : -1)
            return (
                <LightSpeed left>
                    <section key={index}>
                        <FolderContainer backgroundColor={folder.reveal ? "papayawhip" : "#FCFCFC"}>
                            <LeftSideContainer>
                                {unFinished.length !== 0 &&
                                    <Bounce >
                                        <Dot></Dot>
                                    </Bounce>}
                                <FolderButton onClick={() => openFolder(index, folder)}
                                    fontSize={folder.name.length > 16 ? "13px" : "16px"}>
                                    <Image src={require('../Assets/FolderIcon.png')} />
                                    <ButtonText>
                                        {folder.name} ({folder.items.length} {folder.items.length === 1 ? "item" : "items"})
                                </ButtonText>
                                </FolderButton>
                                <DropdownContainer>
                                    <Dropdown onChange={(event) => event.target.value === "dueDate" ? sortFolder(sortByDueDate, index) : event.target.value === "dateCreated" ? sortFolder(sortByCreated, index) : ""}>
                                        <option value="">Sort by</option>
                                        <option value={"dueDate"}>Due Date</option>
                                        <option value={"dateCreated"}>Post Time</option>
                                    </Dropdown>
                                </DropdownContainer>

                            </LeftSideContainer>
                            <FlexColumn>
                                <TextButton color="#a3a3a3" onClick={() => removeCategory(index)}>[remove]</TextButton>
                                <TextButton color="#a3a3a3" onClick={() => clearFolder(index)}>[empty folder]</TextButton>
                            </FlexColumn>

                        </FolderContainer>

                        {folder.reveal && folder.items.length > 0 &&
                            folder.items.map((item, index) => {
                                return (
                                    <LightSpeed left>
                                        <ToDoItem key={index} {...item} index={index} />
                                    </LightSpeed>
                                )
                            })
                        }
                        {folder.reveal && folder.items.length === 0 &&
                            < EmptyDisplay />
                        }
                    </section>
                </LightSpeed>
            )
        })
    )
}