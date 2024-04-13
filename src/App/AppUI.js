import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoLoading } from '../TodoLoading/TodoLoading';
import { TodoError } from '../TodoError/TodoError';
import { TodoEmpty } from '../TodoEmpty/TodoEmpty';


function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
}) {
    return (
        <>

            <TodoCounter total={totalTodos} completed={completedTodos} />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
                {loading && (
                    <>
                        <TodoLoading />
                        <TodoLoading />
                        <TodoLoading />
                    </>
                )}
                {error && <TodoError />}
                {(!loading && searchedTodos.length === 0) && <TodoEmpty />}

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