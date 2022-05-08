import React, {useRef} from "react";


export default function AddTodo({handleAddTodo}) {
    
    let todoNameRef = useRef()
    
    function handleTodo(e){
        handleAddTodo(e,todoNameRef)
    }
    return (
    <>
        <form>
            <div className="row">
                <div className="col text-center">
                    <input className="form-control" ref={todoNameRef} type="text" placeholder="Enter a new todo" />
                </div>
                <div className="col text-center">
                    <button className="btn btn-success" onClick={handleTodo}>Add new todo</button>
                </div>
            </div>
        </form>
    </>
    )
}
