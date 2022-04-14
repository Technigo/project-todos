import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { Container } from "styledelements/elements";

const ProjectList = () => {
  const projects = useSelector((store) => store.projects.project);
  const icons = useSelector((store) => store.icons.icons);

  return (
    <Container>
      {projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <ProjectListContainer color={project.color}>
            <IconTitle>
              <Icon
                src={icons[Number(project.icon)][3]}
                alt={icons[Number(project.icon)][1]}
              />
              {project.title}
            </IconTitle>
            <div>
              <TaskStatus>
                {project.tasks.filter((task) => task.complete === true).length}{" "}
                / {project.tasks.length} tasks done
              </TaskStatus>
            </div>
          </ProjectListContainer>
        </Link>
      ))}
    </Container>
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
