import React from 'react'

export default function Todo({todo, toogleTodo}) {
    
    function handleTodoClick() {
        toogleTodo(todo.id)
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div class="form-check">
                            <input className="form-check-input" type="checkbox" checked={todo.completed} onChange={handleTodoClick} />
                            <label className="form-check-label" for="flexCheckDefault">{todo.name}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
