import { Avatar } from '@mui/material';
import React from 'react';
import ShareIcon from '@mui/icons-material/ShareOutlined';
import MoreIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';

export default function AppBar(props) {
  return (
    <div className="AppBar">
      <div className="LeftSide">
        <div className="ProjectTitle">
          <Link to="./dashboard" className="ProjectName">
            <h2>{props.projectName}</h2>
          </Link>
        </div>
        <div className="Others">
          <Link to="./meeting" className="MeetLink">
            Meeting
          </Link>
          <Link to="./filemanager" className="FileManager">
            FileManager
          </Link>
        </div>
      </div>
      <div className="RightSide">
        <div className="AvatarContainer">
          {props.users.map((user) => {
            return (
              <Avatar
                key={user.id}
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
