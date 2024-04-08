import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoLists';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Comer Queso', completed: false },
  { text: 'Llorar 5 minutos', completed: true },
  { text: 'Jugar Paladins', completed: false },
];

function App() {
  return (
    <>

      <TodoCounter total={6} completed={3} />
      <TodoSearch />


      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />


    </>
  );
}

export default App;
