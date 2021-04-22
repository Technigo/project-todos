import React from 'react'
import { useSelector } from 'react-redux'
import TodoCard from "./TodoCard"
import { Container, Divider } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  container: {
      minWidth: 275,
      margin: "10px"
  },
  heading: {
      marginLeft: "20px",
      color: "#8A3FFC"
  }
 
});


const WorkStudies = () => {
    const classes = useStyles()
    const todoList = useSelector((store) => store.todos);
    const filteredTasksList = todoList.items.filter((item) => item.category === "Studies and work");
  
    return (
      <Container className={classes.containter}>
        <h2 className={classes.heading}>Studies and Work📚</h2>
        {filteredTasksList.map((item) => (
          <TodoCard todo={item}></TodoCard>
        ))}
      <Divider />
      </Container>
    );
  };
  
export default WorkStudies