import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoLists';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCounter />
      <TodoSearch />


      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />


    </div>
  );
}

export default App;
