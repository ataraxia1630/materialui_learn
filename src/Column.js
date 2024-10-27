import { Button, Input, Stack } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreIcon from '@mui/icons-material/MoreHoriz';
import Task from './Task';

export default function Column(props) {
  const [title, setTitle] = useState(props.title || 'New');
  const [tasks, setTasks] = useState(props.tasks || []);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const AddTask = () => {
    setTasks((preTasks) => [
      ...preTasks,
      {
        id: preTasks.length + 1,
        title: 'New',
      },
    ]);
    console.log(tasks);
  };

  const DeleteTask = (id) => {
    setTasks((preTasks) => preTasks.filter((task) => task.id !== id));
    console.log(tasks);
  };

  return (
    <Stack direction="column" className="Column" draggable>
      <Stack className="Title" direction="row">
        <Input value={title} onChange={handleChange} />
        <MoreIcon />
      </Stack>
      <Stack className="Main">
        {tasks.map((task) => {
          return (
            <Task
              title={task.title}
              key={task.id}
              id={task.id}
              className="Task"
              delete={() => DeleteTask(task.id)}
            ></Task>
          );
        })}
      </Stack>
      <Stack
        direction="row"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '24px',
          width: '100%',
          //border: 'solid black 1px',
        }}
      >
        <Button onClick={AddTask}>
          <AddIcon className="Icon" />
        </Button>

        <Button onClick={props.delete}>
          <DeleteIcon className="Icon" />
        </Button>
      </Stack>
    </Stack>
  );
}
