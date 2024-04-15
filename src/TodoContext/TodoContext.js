import React from "react";
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false)

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const sortTodoText = (todo, ascending) => {
        return todo.slice().sort((a, b) => {
            const order = ascending ? 1 : -1;
            return order * a.text.localeCompare(b.text);
        });
    };

    const sortTodoCompleted = (todo, completed) => {
        return todo.filter((item) => {
            return completed ? !item.completed : item.completed;
        });
    };

    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase()
            const todoSearch = searchValue.toLowerCase()
            return todoText.includes(todoSearch)
        });

    const [filterTodo, setFilterTodo] = React.useState('')

    const handleFilter = (todos, filterType) => {
        switch (filterType) {
            case 'sortAZ':
                return sortTodoText(todos, true);
            case 'sortZA':
                return sortTodoText(todos, false);
            case 'sortTrue':
                return sortTodoCompleted(todos, true);
            case 'sortFalse':
                return sortTodoCompleted(todos, false);
            default:
                return todos;
        }
    }

    let listTodos = handleFilter(searchedTodos, filterTodo);

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push(
            {
                text,
                completed: false,
            });
        saveTodos(newTodos);
    }

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            listTodos,
            setFilterTodo,
            completeTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };