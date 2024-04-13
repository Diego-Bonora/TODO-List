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
import React from 'react';

function AppUI() {
    const {
        searchedTodos,
        completeTodo,
        deleteTodo,
        totalTodos,
        loading,
        error
    } = React.useContext(TodoContext)

    return (
        <>

            <TodoCounter />
            <TodoSearch />

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

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />


        </>
    );
}

export { AppUI }