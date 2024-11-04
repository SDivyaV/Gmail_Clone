import React, { useEffect, useState } from 'react';
import './EmailList.css'
import Section from './Section';
import { Checkbox, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardAltIcon from '@mui/icons-material/KeyboardAlt';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import EmailRow from './EmailRow';
import { db } from '../firebase';
import {  collection, query, orderBy, onSnapshot, doc } from 'firebase/firestore';

function EmailList() {

  const [emails,setEmails] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'emails'),orderBy('timestamp','desc'));
    const snap = onSnapshot(q, (snapshot) => 
      setEmails(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      })))
    );
    return snap;
  },[])

  return (
    <div className='emailList'>
      <div className='emailList_setting'>
        <div className='emailList_settingLeft'>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='emailList_settingRight'>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardAltIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
        </div>
      </div>

      <div className='emailList_sections'>
        <Section Icon={InboxIcon} title="Primary" color="#0000FF" selected/>
        <Section Icon={LocalOfferOutlinedIcon} title="Promotion" color="#0000FF" />
        <Section Icon={PeopleOutlinedIcon} title="Social" color="#0000FF" />
      </div>

      <div className='emailList_list'>
        {emails.map(({id, data: { recipients, subject, message, timestamp }}) => (
          <EmailRow 
            id={id}
            key={id}
            title={recipients}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toLocaleString()}
          />
        ))}
        <EmailRow 
          title="Testing"
          subject="Hey everyone!!"
          description="This is a test"
          time="12pm"
        />
        <EmailRow 
          title="Testing"
          subject="Hey everyone!!"
          description="This is a test!!!This is a testThis is a testThis is a test"
          time="12pm"
        />
      </div>
    </div>
  )
}

export default EmailList
