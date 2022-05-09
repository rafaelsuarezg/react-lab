import React, {useState, useEffect} from "react";
import Container from '@mui/material/Container';
import TodoList from "./TodoList";
import Header from "./Header";
import {v4 as uuidv4} from 'uuid';

// Working with this tutorial: https://www.youtube.com/watch?v=hQAHSlTtcmY&t=85s&ab_channel=WebDevSimplified
// Local storage: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// Uuid: https://www.npmjs.com/package/uuid

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    // Load todos from local storage
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    // Save todos to local storage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toogleTodo(id) {
    // Copy todos array
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    // Toggle completed
    todo.completed = !todo.completed
    // Set new todos
    setTodos(newTodos)
  }
  
  function handleAddTodo (todoText) {
    // return if name is empty
    if (todoText === '') return
    // Set Todos
    setTodos(prevTodos => {
      return [...prevTodos, {name: todoText, id: uuidv4(), completed: false}]
    })
  }

  function handleClearCompletedTodos(){
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  
  return (
    <>
      <Header 
        handleAddTodo={handleAddTodo} 
        handleClearCompletedTodos={handleClearCompletedTodos}
        todos={todos}
      />
      <Container maxWidth="sm" sx={{ p: 2}} >
          <TodoList todos={todos} toogleTodo={toogleTodo} />
      </Container>
    </>
  )
}

export default App;
