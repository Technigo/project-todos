import React, { useState } from "react";
import { formatRelative } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { keyframes } from "styled-components";
import { projects } from "reducers/projects";
import trashgray from "../assets/trashgray.svg";
import checkblack from "../assets/checkblack.svg";
import saveblack from "../assets/saveblack.svg";
import editblack from "../assets/editblack.svg";

const Task = ({ taskid, projectindex, checkComplete }) => {
  const [editable, setEditable] = useState(false);
  const [newText, setNewText] = useState("");
  const dispatch = useDispatch();
  const thisTask = useSelector((store) =>
    store.projects.project[projectindex].tasks.find(
      (task) => taskid === task.taskid
    )
  );
  const taskIndex = useSelector((store) =>
    store.projects.project[projectindex].tasks.findIndex(
      (task) => taskid === task.taskid
    )
  );
  const created = formatRelative(new Date(thisTask.added), new Date());

  const toggleComplete = () => {
    dispatch(
      projects.actions.toggleTask({
        taskindex: taskIndex,
        projectindex: projectindex,
      })
    );
    setTimeout(checkComplete(), 5);
  };

  const deleteTask = () => {
    dispatch(
      projects.actions.deleteTask({
        taskindex: taskIndex,
        projectindex: projectindex,
      })
    );
    setTimeout(checkComplete(), 5);
  };

  const saveNewText = () => {
    dispatch(
      projects.actions.editTask({
        taskindex: taskIndex,
        projectindex: projectindex,
        title: newText,
      })
    );
  };

  const editTask = () => {
    setEditable(true);
  };

  const changingText = (e) => {
    setNewText(e.currentTarget.textContent);
  };

  const pasteAsPlainText = (event) => {
    event.preventDefault();

    const text = event.clipboardData.getData("text/plain");
    document.execCommand("insertHTML", false, text);
  };

  const disableNewLines = (e) => {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      e.preventDefault();
    }
  };

  const savingText = () => {
    setEditable(false);
    saveNewText();
  };

  return (
    <TaskWrapper>
      <CustomCheck
        role="button"
        onClick={toggleComplete}
        complete={thisTask.complete}
        tabIndex="0"
        onKeyDown={(e) => e.key === "Enter" && toggleComplete()}
      >
        {thisTask.complete ? "" : <IncompleteCheckIcon src={checkblack} />}
        {thisTask.complete ? <CheckIcon src={checkblack} /> : ""}
      </CustomCheck>
      <TaskInfo complete={thisTask.complete}>
        <TaskTitle
          contentEditable={editable}
          onBlur={(e) => changingText(e)}
          onPaste={pasteAsPlainText}
          onKeyPress={(e) => disableNewLines(e)}
        >
          {thisTask.title}
        </TaskTitle>
        <TaskDate>Added {created}</TaskDate>
        <Line />
      </TaskInfo>
      <IconWrapper>
        {!editable && (
          <IconButton
            role="button"
            tabIndex="0"
            onClick={editTask}
            onKeyDown={(e) => e.key === "Enter" && editTask()}
          >
            <Icon src={editblack} alt="edit task." />
          </IconButton>
        )}
        {editable && (
          <IconButton
            role="button"
            tabIndex="0"
            onClick={savingText}
            onKeyDown={(e) => e.key === "Enter" && savingText()}
          >
            <Icon src={saveblack} alt="save edit." />
          </IconButton>
        )}

        <IconButton
          role="button"
          tabIndex="0"
          onClick={deleteTask}
          onKeyDown={(e) => e.key === "Enter" && deleteTask()}
        >
          <Icon src={trashgray} alt="delete task." />
        </IconButton>
      </IconWrapper>
    </TaskWrapper>
  );
};

export default Task;

const TaskWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content auto max-content;
  align-items: center;
  margin: 10px 0;
  gap: 10px;
  background-color: white;
`;

const Line = styled.hr`
  border-top: 1px solid #adb5bd;
  border-left: 0px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 0px solid transparent;
`;

const CheckIcon = styled.img`
  height: 20px;
  width: 20px;
  filter: invert(11%) sepia(5%) saturate(1643%) hue-rotate(179deg)
    brightness(96%) contrast(92%);
  transition: all 0.7s ease-out;
`;

const IncompleteCheckIcon = styled.img`
  height: 20px;
  width: 20px;
  transform: scale(0);
  opacity: 0;
  filter: invert(96%) sepia(1%) saturate(3393%) hue-rotate(180deg)
    brightness(78%) contrast(87%);
  transition: all 0.7s ease-out;
`;

const CustomCheck = styled.div`
  height: 20px;
  width: 20px;
  border: 1px solid
    ${(props) => (props.complete === true ? "#adb5bd" : "#212529")};
  border-radius: 4px;
  cursor: pointer;

  @media (hover: hover) {
    &:hover ${IncompleteCheckIcon} {
      transition: all 0.5s ease-in;
      transform: scale(1);
      opacity: 1;
    }

    &:hover ${CheckIcon} {
      transition: all 0.5s ease-in;
      transform: scale(0);
      opacity: 0;
    }
  }
`;

const TaskInfo = styled.div`
  justify-self: stretch;
  transition: 0.7s ease-in-out;
  color: ${(props) => (props.complete === true ? "#adb5bd" : "#212529")};
`;

const TaskTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  hyphens: auto;
  word-wrap: break-word;
  overflow-wrap: break-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
`;

const TaskDate = styled.p`
  font-size: 14px;
  font-weight: 300;
`;

const shake = keyframes` 
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -1px) rotate(-1deg); }
  20% { transform: translate(-2px, -1px) rotate(1deg); }
  30% { transform: translate(-1px, 0px) rotate(0deg); }
  40% { transform: translate(0px, 1px) rotate(1deg); }
  50% { transform: translate(0px, 0px) rotate(-1deg); }
  60% { transform: translate(-1px, 0px) rotate(0deg); }
  70% { transform: translate(0px, 1px) rotate(-1deg); }
  80% { transform: translate(1px, 2px) rotate(1deg); }
  90% { transform: translate(1px, 1px) rotate(0deg); }
  100% { transform: translate(0px, 0px) rotate(-1deg); }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const IconButton = styled.div`
  height: 20px;
  width: 20px;
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;

  &:hover {
    transition: 0.5s ease-in-out;
    transform: scale(1.2);
    animation: ${shake} 1s;
    animation-iteration-count: infinite;
  }
`;
