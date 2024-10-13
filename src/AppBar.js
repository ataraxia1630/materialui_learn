import { Avatar } from '@mui/material';
import React from 'react';
import ShareIcon from '@mui/icons-material/ShareOutlined';
import MoreIcon from '@mui/icons-material/MoreHoriz';

export default function AppBar(props) {
  return (
    <div className="AppBar">
      <div className="ProjectTitle">
        <h2>{props.projectName}</h2>
      </div>
      <div className="LeftSide">
        <div className="AvatarContainer">
          {props.users.map((user) => {
            return (
              <Avatar
                alt={user.name}
                src={user.avatar}
                sx={{ width: 28, height: 28 }}
              ></Avatar>
            );
          })}
        </div>
        <div className="Icon">
          <ShareIcon />
          <MoreIcon />
        </div>
      </div>
    </div>
  );
}
