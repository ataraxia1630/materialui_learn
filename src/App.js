import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import { Link, Route, Routes } from 'react-router-dom';

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
      name: 'File word',
    },
    {
      id: 1,
      name: 'File pdf',
    },
    {
      id: 2,
      name: 'File ppt',
    },
    {
      id: 3,
      name: 'File png',
    },
    {
      id: 4,
      name: 'File mp3',
    },
    {
      id: 5,
      name: 'File mp4',
    },
  ];

  return (
    <div className="app">
      <Routes>
        <Route path="" element={<Link to="/dashboard">Dashboard</Link>}></Route>
        <Route
          path="/dashboard"
          element={
            <Dashboard
              projectName={projectName}
              users={users}
              columns={columns}
              files={files}
            ></Dashboard>
          }
        ></Route>
      </Routes>
    </div>
  );
}
