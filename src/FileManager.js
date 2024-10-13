import { Stack } from '@mui/material';
import React from 'react';
import File from './File';

export default function FileManager(props) {
  return (
    <Stack className="FileManager">
      <h3 className="Title">FILES</h3>
      <Stack className="Files">
        {props.files.map((file) => {
          return <File />;
        })}
      </Stack>
    </Stack>
  );
}
