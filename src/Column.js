import { Stack } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import MoreIcon from '@mui/icons-material/MoreHoriz';

export default function Column(props) {
  return (
    <Stack direction="column" className="Column">
      <Stack className="Title" direction="row">
        <p>{props.title}</p>
        <MoreIcon />
      </Stack>
      <Stack className="Main"></Stack>
      <AddIcon className="AddIcon" />
    </Stack>
  );
}
