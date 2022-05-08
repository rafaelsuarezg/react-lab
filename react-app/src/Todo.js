import React from 'react'

export default function Todo({todo, toogleTodo}) {
    function handleTodoClick() {
        toogleTodo(todo.id)
    }
    return (
    <div>
        <input type="checkbox" checked={todo.completed} onChange={handleTodoClick} />
        <label>{todo.name}</label>
    </div>
)
}
