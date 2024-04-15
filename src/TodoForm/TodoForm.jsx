import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm({ children }) {
    const { setOpenModal, addTodo } = React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    }

    const onClose = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Write your new TODO</label>
            <textarea placeholder="Play Minecraft" value={newTodoValue} onChange={onChange} />
            <div className="TodoForm-buttonContainer">
                <button type="button" onClick={onClose} className="TodoForm-button TodoForm-button--close">CLOSE</button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">ADD</button>
            </div>
        </form>
    );
}

export { TodoForm }