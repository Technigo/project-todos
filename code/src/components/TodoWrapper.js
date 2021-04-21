import React from 'react'
import Header from './Header'
import TodoList from './TodoList'
import ClearTodo from './ClearTodo'
import AddNewTodo from './AddNewTodo'
import Counter from './Counter'
import WorkStudies from './WorkStudies'
import TrainingHealth from './TrainingHealth'
import AdminStuff from './AdminStuff'
import Other from './Other'
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles"


//The layout for the whole todo app 

const useStyles = makeStyles({
    root: {
        backgroundColor: 'pink', 
        width: '500px',
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }, wrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "20px"
    }
  });
  
const TodoWrapper = () => {

    const classes = useStyles()

return(
<Container className={classes.root}>
    <Grid className={classes.container}>
        <Header />
        <AddNewTodo />
        <WorkStudies />
        <TrainingHealth />
        <AdminStuff />
        <Other />
        <Container className={classes.wrapper}>
            <ClearTodo />
            <Counter/>  
        </Container>
    </Grid>
</Container>
)
}

export default TodoWrapper