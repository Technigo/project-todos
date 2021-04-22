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
    color: "#0a043c"
  }
});

const Other = () => {
    const classes = useStyles()
    const todoList = useSelector((store) => store.todos);
    const filteredTasksList = todoList.items.filter((item) => item.category === "Other");
  
    return (
      <Container className={classes.container}>
        <h2 className={classes.heading}>Other 🎨</h2>
        {filteredTasksList.map((item) => (
          <TodoCard todo={item}></TodoCard>
        ))}
        <Divider />
        </Container>
    );
  };
  
export default Other