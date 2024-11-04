import React from 'react';
import './Mail.css'
import { Icon, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import KeyboardAltIcon from '@mui/icons-material/KeyboardAlt';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import ReplyIcon from '@mui/icons-material/Reply';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectedOpenMail } from '../features/mailSlice';

function Mail() {
  const navigate = useNavigate();

  const selectedMail = useSelector(selectedOpenMail);

  return (
    <div className='mail'>
      <div className='mail_tools'>
        <div className='mail_toolsLeft'>
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton>
            <MoveToInboxIcon />
          </IconButton>

          <IconButton>
            <ReportGmailerrorredIcon/>
          </IconButton>

          <IconButton>
            <DeleteOutlineIcon />
          </IconButton>

          <IconButton>
            <MarkEmailUnreadOutlinedIcon/>
          </IconButton>

          <IconButton>
            <DriveFileMoveOutlinedIcon/>
          </IconButton>

          <IconButton>
            <MoreVertOutlinedIcon/>
          </IconButton>

        </div>

        <div className='mail_toolsRight'>
          <IconButton>
            <ChevronLeftOutlinedIcon />
          </IconButton>

          <IconButton>
            <ChevronRightOutlinedIcon />
          </IconButton>

          <IconButton>
            <KeyboardAltIcon />
          </IconButton>

          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
        </div>
      </div>
      <div className='mail_body'>
        <div className='mail_bodyHeader'>
          <div className='mail_subjectInfo'>
            <h2>{selectedMail?.subject}</h2>
            <div className='mail_titleTime'>
              <p className='mail_title'>{selectedMail?.title}</p>
              <p className='mail_time'>{selectedMail?.time}</p>
            </div>
          </div>
          <div className='mail_icons'>
            <IconButton>
              <LocalPrintshopOutlinedIcon />
            </IconButton>
            <IconButton>
              <OpenInNewOutlinedIcon />
            </IconButton>
          </div>
        </div>
        <div className='mail_message'>
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Mail
