import { useRef } from "react";
import "./Header.css"

function Header({ handleAddTodo }) {
    const inputRef = useRef()

    return (
        <header>
            <h1 className="title">To-Do App!</h1>
            <h3>Add new To-Do</h3>
            <input type="text" ref={inputRef} />
            <button onClick={() => {handleAddTodo(inputRef)}} className="add-btn">Add</button>
        </header>
    )
}

export default Header
