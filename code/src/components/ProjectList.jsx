import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

// Import Icons'
import {
  chatwhite,
  clipboardwhite,
  gamewhite,
  giftwhite,
  outdoorswhite,
  pinwhite,
  shoppingwhite,
  timewhite,
  travelwhite,
  tvwhite,
  viewwhite,
  weatherwhite,
} from "../assets/icons";

const iconArray = [
  [chatwhite, "chat"],
  [clipboardwhite, "clipboard"],
  [gamewhite, "game"],
  [giftwhite, "gift"],
  [outdoorswhite, "outdoors"],
  [pinwhite, "pin"],
  [shoppingwhite, "shopping"],
  [timewhite, "time"],
  [travelwhite, "travel"],
  [tvwhite, "tv"],
  [viewwhite, "view"],
  [weatherwhite, "weather"],
];

const ProjectList = () => {
  const projects = useSelector((store) => store.projects.project);
  const tasks = useSelector((store) => store.tasks.task);

  return (
    <>
      {projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <ProjectListContainer color={project.color}>
            <IconTitle>
              <Icon src={iconArray[Number(project.icon)][0]} />
              {project.title}
            </IconTitle>
            <div>
              <TaskStatus>
                {
                  tasks.filter(
                    (task) =>
                      project.id === task.projectid && task.complete === true
                  ).length
                }{" "}
                / {tasks.filter((task) => project.id === task.projectid).length}{" "}
                tasks done
              </TaskStatus>
            </div>
          </ProjectListContainer>
        </Link>
      ))}
    </>
  );
};

export default ProjectList;

const ProjectListContainer = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding: 8px 10px;
  background-color: ${(props) => props.color};
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;

  a {
    color: white;
  }
`;

const IconTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Icon = styled.img`
  height: 30px;
  width: 30px;
`;

const TaskStatus = styled.p`
  font-size: 18px;
  font-weight: 400;
`;
