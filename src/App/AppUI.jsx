import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoLoading } from "../TodoLoading/TodoLoading";
import { TodoError } from "../TodoError/TodoError";
import { TodoEmpty } from "../TodoEmpty/TodoEmpty";
import { TodoSearchEmpty } from "../TodoEmpty/TodoSearchEmpty";
import { TodoContext } from "../TodoContext/TodoContext";
import { Modal } from "../Modal/Modal";
import { TodoForm } from "../TodoForm/TodoForm";
import { TodoHeader } from "../TodoHeader/TodoHeader";
import { TodoFilter } from "../TodoFilter/TodoFilter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import React from "react";
import "./AppUI.css";

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
    completedTodos,
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <div className="TodoSearchContainer">
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TodoFilter setFilterTodo={setFilterTodo} />
        </div>
      </TodoHeader>

      <TodoList>
        {loading && (
          <>
            <TodoLoading />
            <TodoLoading />
            <TodoLoading />
          </>
        )}
        {error && <TodoError />}
        {!loading && totalTodos === 0 && <TodoEmpty />}
        {!loading && searchedTodos.length === 0 && totalTodos >= 1 && (
          <TodoSearchEmpty />
        )}

        {listTodos.map((todo) => (
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

export { AppUI };
