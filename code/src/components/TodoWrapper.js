import React from 'react'
import Header from './Header'
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
//the background styling is foind in index.css

const useStyles = makeStyles({
    root: {
        backgroundColor: '#ECECEC',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        borderRadius: "25px",
        // minWidth: 50,
        // width: '500px',
        // marginTop: "-50px"
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
<div className="blubs">
    <Container maxWidth="sm" className={classes.root}>
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
</div>
)
}

export default TodoWrapper