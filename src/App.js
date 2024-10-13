import React, { useState } from 'react';
import './App.css';
import AppBar from './AppBar';
import Process from './Process';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FileManager from './FileManager';

export default function App() {
  var projectName = 'Project Name';
  const users = [
    {
      id: '001',
      name: 'Alex',
      avatar: '../images/alex.jpg',
      color: '',
    },
    {
      id: '002',
      name: 'Anna',
      avatar: '../images/anna.jpg',
      color: '',
    },
    {
      id: '003',
      name: 'Thomas',
      avatar: '../images/thomas.jpg',
      color: '',
    },
    {
      id: '004',
      name: 'Katty',
      avatar: '../images/katty.jpg',
      color: '',
    },
  ];

  const columns = [
    {
      id: 0,
      title: 'TO DO',
      tasks: [],
    },
    {
      id: 1,
      title: 'DOING',
    },
    {
      id: 2,
      title: 'DONE',
    },
    {
      id: 3,
      title: 'PLANNING',
    },
    {
      id: 4,
      title: 'OTHERS',
    },
  ];

  const files = [
    {
      id: 0,
      name: 'File bao cao',
    },
  ];

  return (
    <div className="app">
      <div className="appbar">
        <AppBar projectName={projectName} users={users}></AppBar>
      </div>
      <div className="main">
        <Process columns={columns}></Process>
        <Button
          variant="contained"
          className="add_process"
          endIcon={<AddIcon />}
          sx={{
            backgroundColor: 'rgba(235, 244, 214, 0.5)',
            color: 'black',
            marginLeft: '40px',
            marginTop: '30px',
          }}
        >
          Add process
        </Button>
        <FileManager files={files} className="filemanager"></FileManager>
      </div>
    </div>
  );
}
