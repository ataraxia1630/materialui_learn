import React from 'react';
import AppBar from './AppBar';
import Process from './Process';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FileManager from './FileManager';

export default function Dashboard(props) {
  return (
    <div>
      <div className="appbar">
        <AppBar projectName={props.projectName} users={props.users}></AppBar>
      </div>
      <div className="main">
        <Process columns={props.columns}></Process>
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
        <FileManager files={props.files} className="filemanager"></FileManager>
      </div>
    </div>
  );
}
