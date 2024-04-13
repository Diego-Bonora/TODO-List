import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: 'Comer Queso', completed: false },
//   { text: 'Llorar 5 minutos', completed: true },
//   { text: 'Jugar Paladins', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));


function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase()
      const todoSearch = searchValue.toLowerCase()
      return todoText.includes(todoSearch)
    });

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
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      loading={loading}
      error={error}
    />
  );
}

export default App;
