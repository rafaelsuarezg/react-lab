import React from 'react'

export default function Footer({todos}) {

  const pending = todos.filter(todo => !todo.completed).length
  
  return (
    <>
      <div className="container">
          <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
            <div className="row">
              <p>
                  You have <b>{pending}</b> {pending<=1 ? 'todo' : 'todos'} pending
              </p>
            </div>
          </footer>
      </div>
    </>
  )
}
