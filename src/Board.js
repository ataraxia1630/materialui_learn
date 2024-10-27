import { Button, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Column from './Column';
import AddIcon from '@mui/icons-material/Add';

export default function Board(props) {
  const [columns, setColumns] = useState(props.columns || []);

  const AddColumn = () => {
    setColumns((prevColumns) => [
      ...prevColumns,
      {
        id: prevColumns.length + 1, // Tạo id mới dựa trên độ dài mảng // tạm thời hoy
        title: 'TO DO',
        tasks: [],
      },
    ]);
    console.log(columns);
  };

  const DeleteColumn = (id) => {
    setColumns((prevColumns) =>
      prevColumns.filter((column) => column.id !== id)
    );
    console.log(columns);
  };

  return (
    <Stack direction="column" className="Board">
      {/* <h3>Board 1</h3> */}
      <Stack direction="row" className="Main">
        {columns.map((column) => {
          return (
            <Column
              title={column.title}
              key={column.id} // test kĩ vì hàm delete sẽ làm thay đổi id => key cũng phải đổi
              // nếu không sẽ có 2 cái bị trùng key (nếu thêm column mới)
              // nên đổi set id theo cách khác
              tasks={column.tasks}
              delete={() => DeleteColumn(column.id)}
            ></Column>
          );
        })}
      </Stack>
      <Button
        variant="contained"
        className="add_board"
        endIcon={<AddIcon />}
        sx={{
          backgroundColor: 'rgba(235, 244, 214, 0.5)',
          color: 'black',
          height: '30px',
          width: '200px',
        }}
        onClick={AddColumn}
      >
        New column
      </Button>
    </Stack>
  );
}
