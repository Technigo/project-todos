import React from "react"
import { useSelector } from "react-redux"
import {
  List,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Paper,
} from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons"

import { TodoItem } from "components/TodoItem"

export const TodoList = () => {
  const allTasks = useSelector((store) => store.tasks)

  return (
    <>
      <Paper style={{ backgroundColor: "#212121" }}>
        <Accordion defaultExpanded>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            expandIcon={<ExpandMore />}
          >
            <Typography>Today</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {allTasks.todos.map((task, index) =>
                task.due === "Today" ? (
                  <TodoItem
                    key={task.id}
                    task={task.task}
                    index={index}
                    done={task.done}
                  ></TodoItem>
                ) : null
              )}
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            expandIcon={<ExpandMore />}
          >
            <Typography>Tomorrow</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {allTasks.todos.map((task, index) =>
                task.due === "Tomorrow" ? (
                  <TodoItem
                    key={task.id}
                    task={task.task}
                    index={index}
                    done={task.done}
                  ></TodoItem>
                ) : null
              )}
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            expandIcon={<ExpandMore />}
          >
            <Typography>Later</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {allTasks.todos.map((task, index) =>
                task.due !== "Today" && task.due !== "Tomorrow" ? (
                  <TodoItem
                    key={task.id}
                    task={task.task}
                    index={index}
                    done={task.done}
                  ></TodoItem>
                ) : null
              )}
            </List>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </>
  )
}
