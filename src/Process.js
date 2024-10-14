import { Stack } from '@mui/material';
import React from 'react';
import Column from './Column';

export default function Process(props) {
  return (
    <Stack direction="column" className="Process">
      <h3>Process 1</h3>
      <Stack direction="row" className="Main">
        {props.columns.map((column) => {
          console.log(column.name);
          return <Column title={column.title} key={column.id}></Column>;
        })}
      </Stack>
    </Stack>
  );
}
