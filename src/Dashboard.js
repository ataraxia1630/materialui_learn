import React, { useState } from 'react';
import AppBar from './AppBar';
import Board from './Board';
import { Button, Divider, MenuItem, Select, Stack } from '@mui/material';

import FileManager from './FileManager';
import { RoomPreferencesSharp } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Dashboard(props) {
  const [boardId, setBoardID] = useState(1);

  const handleChange = (e) => {
    setBoardID(e.target.value);
  };

  return (
    <div>
      <div className="main">
        <Stack className="TeamThree" direction="row">
          <Select
            value={boardId}
            onChange={handleChange}
            className="BoardSelect"
            sx={{ border: 'none', '& fieldset': { border: 'none' } }}
          >
            {props.boards.map((board) => {
              return (
                <MenuItem key={board.id} value={board.id}>
                  {board.title}
                </MenuItem>
              );
            })}
          </Select>
        </Stack>
        <Board
          key={boardId}
          columns={props.boards[boardId - 1].columns}
        ></Board>
      </div>
    </div>
  );
}
