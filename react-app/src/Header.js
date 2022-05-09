import React from 'react'
import AddTodo from './AddTodo'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';


export default function Header({todos, handleAddTodo, handleClearCompletedTodos}) {
    
    const pending = todos.filter(todo => !todo.completed).length

    return (
    <AppBar position="sticky" color="inherit">
        <Container maxWidth="sm">
            <Toolbar>
                <Typography
                    component="h1"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    TheCoolestTodoApp
                </Typography>              
            </Toolbar>
            <Toolbar>
                <AddTodo handleAddTodo={handleAddTodo}/>
            </Toolbar>
            <Toolbar sx={{ justifyContent: 'center' }} variant="regular" >
                <p>You have <b>{pending}</b> {pending<=1 ? 'todo' : 'todos'} pending</p>
            </Toolbar> 
            <Toolbar sx={{ justifyContent: 'center' , pb:2 }} variant="dense">
                <Button onClick={handleClearCompletedTodos} variant="text">Remove completed todos</Button>
            </Toolbar> 
        </Container>                       
    </AppBar>
  )
}
