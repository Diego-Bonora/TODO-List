import React, { Children, useState } from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext/TodoContext';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
