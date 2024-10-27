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
    <Stack
      className="Column"
      draggable
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        /* dang dung theo thong so tren may, can dieu chinh lai */
      }} // not this one
    >
      <Stack className="Top">
        <Stack className="Title" direction="row">
          <Input value={title} onChange={handleChange} />
          <MoreIcon />
        </Stack>
        <Stack
          className="Main"
          sx={{
            height: 'auto',
          }}
        >
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
      </Stack>
      <Stack
        className="Bottom"
        direction="row"
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // cho 2 cai icon nam o 2 ben
          height: '24px',
          width: '100%',
          // border: 'solid black 1px',
          marginTop: '1.5rem', // not this one
        }}
      >
        <Button onClick={AddTask} title="add">
          <AddIcon className="Icon" />
        </Button>

        <Button onClick={props.delete} title="delete">
          <DeleteIcon className="Icon" />
        </Button>
      </Stack>
    </Stack>
  );
}
