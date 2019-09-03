import React from 'react';

const Link = ({ active, children, onClick }) => (
  <button
    className="btn btn-primary mr-2"
    onClick={onClick}
    disabled={active}
  >
    { children }
  </button>
)

export default Link;
