import React from 'react';

export default function Task(props) {
  return (
    <div className="Task" draggable onClick={props.delete}>
      <h4>{props.title}</h4>
    </div>
  );
}
