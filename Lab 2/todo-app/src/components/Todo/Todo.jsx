import { useRef } from "react";
import "./Todo.css"

const Todo = ({ text, handleDeleteTodo }) => {
    const textRef = useRef()

    const handleUndoTodo = () => {
        const text = textRef.current.style.textDecoration
        textRef.current.style.textDecoration = text ? "" : "line-through";
    }

    return (
        <span className="todo-container">
            <span className="todo-text" ref={textRef}>{text}</span>
            <button className="todo-btn" onClick={handleUndoTodo}>Undo</button>
            <button className="todo-btn" onClick={(id) => handleDeleteTodo(id)}>Delete</button>
        </span>
    )
}

export default Todo