import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => (
  <div className="my-4">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </div>
)

export default TodoList;
