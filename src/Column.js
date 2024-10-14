import { Input, Stack } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import MoreIcon from '@mui/icons-material/MoreHoriz';

export default function Column(props) {
  const [title, setTitle] = useState(props.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <Stack direction="column" className="Column">
      <Stack className="Title" direction="row">
        <Input value={title} onChange={handleChange} />
        <MoreIcon />
      </Stack>
      <Stack className="Main"></Stack>
      <AddIcon className="AddIcon" />
    </Stack>
  );
}
