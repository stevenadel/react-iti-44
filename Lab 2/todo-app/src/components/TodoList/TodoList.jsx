import Todo from "../Todo/Todo"
import "./TodoList.css"

function TodoList({ todoList, handleDeleteTodo }) {
    return (
        <section>
            <h2>Let's get some work done!</h2>
            {todoList.map((todo) => (
                <Todo key={todo.id} text={todo.text} handleDeleteTodo={() => handleDeleteTodo(todo.id)} />
            ))}
        </section>
    )
}

export default TodoList
