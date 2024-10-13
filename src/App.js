import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default function App() {
  return (
    <div className="App">
      <Stack direction="row" spacing={5} paddingTop={5} paddingLeft={50}>
        <Button variant="text">Click Me</Button>
        <Button variant="contained">Submit</Button>
        <Button variant="outlined">Sign In</Button>
        <Button variant="disabled">Disable</Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="outlined" startIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </div>
  );
}
