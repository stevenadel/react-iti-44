import { useState } from "react"
import Header from "../components/Header/Header"
import TodoList from "../components/TodoList/TodoList"

function MainPage() {
    const [todoList, setTodoList] = useState([])

    const handleAddTodo = (inputRef) => {        
        const newTodo = {
            id: todoList.length,
            text: inputRef.current.value,
        }

        if (newTodo.text) {
            setTodoList([...todoList, newTodo])
        }

    }

    const handleDeleteTodo = (id) => {
        const newTodoList = todoList.filter((todo) => id !== todo.id);
        setTodoList([...newTodoList]);
    }

    return (
        <>
            <Header handleAddTodo={handleAddTodo} />
            <TodoList todoList={todoList} handleDeleteTodo={handleDeleteTodo} />
        </>
    )
}

export default MainPage
