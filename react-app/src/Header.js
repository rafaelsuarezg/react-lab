import React from 'react'
import AddTodo from './AddTodo'

export default function Header({todos, handleAddTodo, handleClearCompletedTodos}) {
  return (
    <>
    <header className="py-3 mb-5 border-bottom">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                <a href="/" className="mb-3 mb-lg-2 me-lg-auto text-dark text-decoration-none">
                    <span className="fs-4">TheCoolestTodoApp</span>
                </a>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 text-center">
                    <AddTodo handleAddTodo={handleAddTodo}/>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-12 text-center">
                    <div onClick={handleClearCompletedTodos}>Remove completed</div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}
