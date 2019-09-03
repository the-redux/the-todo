import React from 'react';

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
  >
    {
      (completed) ? (
        <del>{ text }</del>
      ) : (
        text
      )
    }
  </li>
);

export default Todo;
