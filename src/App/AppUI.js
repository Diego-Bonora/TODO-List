import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoLoading } from '../TodoLoading/TodoLoading';
import { TodoError } from '../TodoError/TodoError';
import { TodoEmpty } from '../TodoEmpty/TodoEmpty';
import { TodoSearchEmpty } from '../TodoEmpty/TodoSearchEmpty';
import { TodoContext } from '../TodoContext/TodoContext';
import { Modal } from '../Modal/Modal';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodoFilter } from '../TodoFilter/TodoFilter';
import React from 'react';
import './AppUI.css'

function AppUI() {
    const {
        searchedTodos,
        listTodos,
        completeTodo,
        setFilterTodo,
        deleteTodo,
        totalTodos,
        loading,
        error,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)

    return (
        <>

            <TodoCounter />
            <div className='TodoSearchContainer'>
                <TodoSearch />
                <TodoFilter setFilterTodo={setFilterTodo} />
            </div>
            <TodoList>
                {loading && (
                    <>
                        <TodoLoading />
                        <TodoLoading />
                        <TodoLoading />
                    </>
                )}
                {error && <TodoError />}
                {(!loading && totalTodos === 0) && <TodoEmpty />}
                {(!loading && searchedTodos.length === 0 && totalTodos >= 1) && <TodoSearchEmpty />}

                {listTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton setOpenModal={setOpenModal} />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

        </>
    );
}

export { AppUI }