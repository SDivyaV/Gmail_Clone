// Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';
import { Button, IconButton } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddIcon from '@mui/icons-material/Add';
import Icon1 from '@mui/icons-material/LabelImportantOutlined';
import Icon2 from '@mui/icons-material/ScheduleSendOutlined';
import Icon3 from '@mui/icons-material/MailOutlineOutlined';
import Icon4 from '@mui/icons-material/ReportOutlined';
import Icon5 from '@mui/icons-material/DeleteOutline';
import Icon6 from '@mui/icons-material/LabelOutlined';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';

function Sidebar() {
  const dispatch = useDispatch();

  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false);

  const additionalOptions = [
    { Icon: Icon1, title: "Important" },
    { Icon: Icon2, title: "Scheduled"},
    { Icon: Icon3, title: "All Mail"},
    { Icon: Icon4, title: "Spam"},
    { Icon: Icon5, title: "Trash"},
    { Icon: Icon6, title: "Categories"},
  ];

  const handleMoreClick = () => {
    setShowAdditionalOptions(!showAdditionalOptions);
  };

  return (
    <div className='sidebar'>
      <Button 
        startIcon={<ModeEditOutlineOutlinedIcon fontSize='large' />} 
        className='sidebar_compose'
        onClick={() => dispatch(openSendMessage())}
        sx={{
          textTransform: 'capitalize',
          color: 'black',
        }}
      >
        Compose
      </Button>
      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
      <SidebarOption Icon={StarBorderIcon} title="Starred" />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" />
      <SidebarOption Icon={SendIcon} title="Sent" />
      <SidebarOption Icon={InsertDriveFileOutlinedIcon} title="Drafts" number={5} />
      <div onClick={handleMoreClick} style={{ cursor: 'pointer' }}>
        <SidebarOption 
          Icon={showAdditionalOptions ? KeyboardArrowUpIcon : KeyboardArrowDownIcon} 
          title={showAdditionalOptions ? "Less" : "More"} 
        />
      </div>
      {showAdditionalOptions && additionalOptions.map((option, index) => (
        <SidebarOption 
          key={index} 
          Icon={option.Icon} 
          title={option.title} 
        />
      ))}

      <div className='sidebar_footer'>
        <p>Labels</p>
          <div className='sidebar_footerIcons'>
            <IconButton>
              <AddIcon/>
            </IconButton>
          </div>
      </div>
    </div>
  );
}

export default Sidebar;
