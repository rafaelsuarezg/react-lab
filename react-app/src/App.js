import React, {useState, useRef, useEffect} from "react";
import TodoList from "./TodoList";
import {v4 as uuidv4} from 'uuid';

// Working with this tutorial: https://www.youtube.com/watch?v=hQAHSlTtcmY&t=85s&ab_channel=WebDevSimplified
// Local storage: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// Uuid: https://www.npmjs.com/package/uuid

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

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

  function handleClearCompletedTodos(){
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  function handleAddTodo (e) {
    // get the value of the input
    const name = todoNameRef.current.value
    // return if name is empty
    if (name === '') return
    console.log(name)
    // Clear input
    setTodos(prevTodos => {
      return [...prevTodos, {name, id: uuidv4(), completed: false}]
    })
    // Clear input
    todoNameRef.current.value = ''
  }
  
  return (
    <>
    <TodoList todos={todos} toogleTodo={toogleTodo} />
    <input ref={todoNameRef} type="text" placeholder="Enter a new todo" />
    <button onClick={handleAddTodo}>Add new todo</button>
    <button onClick={handleClearCompletedTodos}>Remove completed</button>
    <div>{todos.filter(todo => !todo.completed).length} left to do</div>
    </>
  )
}

export default App;
