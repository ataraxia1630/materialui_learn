import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import { Link, Route, Routes } from 'react-router-dom';
import Meeting from './Meeting';
import AppBar from './AppBar';
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

  const boards = [
    {
      id: 1,
      title: 'Board 1',
      columns: [
        {
          id: 0,
          title: 'TO DO board 1',
          tasks: [
            {
              id: 0,
              title: 'Learn JS',
            },
            {
              id: 1,
              title: 'Learn C#',
            },
            {
              id: 2,
              title: 'Learn PHP',
            },
          ],
        },
        {
          id: 1,
          title: 'DOING',
          tasks: [
            {
              id: 0,
              title: 'Learn JS',
            },
            {
              id: 1,
              title: 'Learn C#',
            },
            {
              id: 2,
              title: 'Learn PHP',
            },
          ],
        },
        {
          id: 2,
          title: 'DONE',
          tasks: [
            {
              id: 0,
              title: 'Learn JS',
            },
            {
              id: 1,
              title: 'Learn C#',
            },
            {
              id: 2,
              title: 'Learn PHP',
            },
          ],
        },
        {
          id: 3,
          title: 'PLANNING',
          tasks: [
            {
              id: 0,
              title: 'Learn JS',
            },
            {
              id: 1,
              title: 'Learn C#',
            },
            {
              id: 2,
              title: 'Learn PHP',
            },
          ],
        },
        {
          id: 4,
          title: 'OTHERS',
          tasks: [
            {
              id: 0,
              title: 'Learn JS',
            },
            {
              id: 1,
              title: 'Learn C#',
            },
            {
              id: 2,
              title: 'Learn PHP',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Board 2',
      columns: [
        {
          id: 0,
          title: 'TO DO board 2',
          tasks: [
            {
              id: 0,
              title: 'Learn JS',
            },
            {
              id: 1,
              title: 'Learn C#',
            },
            {
              id: 2,
              title: 'Learn PHP',
            },
          ],
        },
        {
          id: 1,
          title: 'DOING',
          tasks: [
            {
              id: 0,
              title: 'Learn JS',
            },
            {
              id: 1,
              title: 'Learn C#',
            },
            {
              id: 2,
              title: 'Learn PHP',
            },
          ],
        },
        {
          id: 2,
          title: 'DONE',
          tasks: [
            {
              id: 0,
              title: 'Learn JS',
            },
            {
              id: 1,
              title: 'Learn C#',
            },
            {
              id: 2,
              title: 'Learn PHP',
            },
          ],
        },
        {
          id: 3,
          title: 'PLANNING',
          tasks: [
            {
              id: 0,
              title: 'Learn JS',
            },
            {
              id: 1,
              title: 'Learn C#',
            },
            {
              id: 2,
              title: 'Learn PHP',
            },
          ],
        },
        {
          id: 4,
          title: 'OTHERS',
          tasks: [
            {
              id: 0,
              title: 'Learn JS',
            },
            {
              id: 1,
              title: 'Learn C#',
            },
            {
              id: 2,
              title: 'Learn PHP',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Board 3',
      columns: [
        {
          id: 0,
          title: 'TO DO board 3',
          tasks: [
            {
              id: 0,
              title: 'Learn JS',
            },
            {
              id: 1,
              title: 'Learn C#',
            },
            {
              id: 2,
              title: 'Learn PHP',
            },
          ],
        },
        {
          id: 1,
          title: 'DOING',
          tasks: [
            {
              id: 0,
              title: 'Learn JS',
            },
            {
              id: 1,
              title: 'Learn C#',
            },
            {
              id: 2,
              title: 'Learn PHP',
            },
          ],
        },
        {
          id: 2,
          title: 'DONE',
          tasks: [
            {
              id: 0,
              title: 'Learn JS',
            },
            {
              id: 1,
              title: 'Learn C#',
            },
            {
              id: 2,
              title: 'Learn PHP',
            },
          ],
        },
        {
          id: 3,
          title: 'PLANNING',
          tasks: [
            {
              id: 0,
              title: 'Learn JS',
            },
            {
              id: 1,
              title: 'Learn C#',
            },
            {
              id: 2,
              title: 'Learn PHP',
            },
          ],
        },
        {
          id: 4,
          title: 'OTHERS',
          tasks: [
            {
              id: 0,
              title: 'Learn JS',
            },
            {
              id: 1,
              title: 'Learn C#',
            },
            {
              id: 2,
              title: 'Learn PHP',
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Board 4',
      columns: [
        // {
        //   id: 0,
        //   title: 'board 4 TO DO',
        //   tasks: [
        //     {
        //       id: 0,
        //       title: 'Learn JS',
        //     },
        //     {
        //       id: 1,
        //       title: 'Learn C#',
        //     },
        //     {
        //       id: 2,
        //       title: 'Learn PHP',
        //     },
        //   ],
        // },
        // {
        //   id: 1,
        //   title: 'DOING',
        //   tasks: [
        //     {
        //       id: 0,
        //       title: 'Learn JS',
        //     },
        //     {
        //       id: 1,
        //       title: 'Learn C#',
        //     },
        //     {
        //       id: 2,
        //       title: 'Learn PHP',
        //     },
        //   ],
        // },
        // {
        //   id: 2,
        //   title: 'DONE',
        //   tasks: [
        //     {
        //       id: 0,
        //       title: 'Learn JS',
        //     },
        //     {
        //       id: 1,
        //       title: 'Learn C#',
        //     },
        //     {
        //       id: 2,
        //       title: 'Learn PHP',
        //     },
        //   ],
        // },
        // {
        //   id: 3,
        //   title: 'PLANNING',
        //   tasks: [
        //     {
        //       id: 0,
        //       title: 'Learn JS',
        //     },
        //     {
        //       id: 1,
        //       title: 'Learn C#',
        //     },
        //     {
        //       id: 2,
        //       title: 'Learn PHP',
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   title: 'OTHERS',
        //   tasks: [
        //     {
        //       id: 0,
        //       title: 'Learn JS',
        //     },
        //     {
        //       id: 1,
        //       title: 'Learn C#',
        //     },
        //     {
        //       id: 2,
        //       title: 'Learn PHP',
        //     },
        //   ],
        // },
      ],
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
      <div className="appbar">
        <AppBar projectName={projectName} users={users}></AppBar>
      </div>
      <Routes>
        <Route path="" element={<Link to="/dashboard">Dashboard</Link>}></Route>
        <Route
          path="/dashboard"
          element={
            <Dashboard
              projectName={projectName}
              boards={boards}
              files={files}
            ></Dashboard>
          }
        ></Route>
        <Route path="/meeting" element={<Meeting />}></Route>
        <Route
          path="/filemanager"
          element={<FileManager files={files} />}
        ></Route>
      </Routes>
    </div>
  );
}
