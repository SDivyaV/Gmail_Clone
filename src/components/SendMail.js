import React from 'react';
import './SendMail.css';
import MinimizeIcon from '@mui/icons-material/Minimize';
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import { db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';


function SendMail() {
    const { register, handleSubmit, watch, formState:{ errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        console.log(formData);
        addDoc(collection(db, 'emails'), {
          recipients: formData.recipients,
          subject: formData.subject,
          message: formData.message,
          timestamp: serverTimestamp()
        });

        dispatch(closeSendMessage());
    };

  return (
    <div className='sendMail'>
      <div className='sendMail_Header'>
        <h3>New Message</h3>
        <div className='sendMail_icons'>
            <MinimizeIcon />
            <OpenInFullOutlinedIcon />
        </div>
        <CloseOutlinedIcon 
            className='sendMail_close'
            onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
            type='email' 
            placeholder='Recipients' 
            name='recipients' 
            {...register('recipients',{ required: true })}
        />
        {errors.recipients && <p className='sendMail_error'>Recipients is required!</p>}

        <input 
            type='text' 
            placeholder='Subject' 
            name='subject' 
            {...register('subject',{ required: true})}
        />
        {errors.subject && <p className='sendMail_error'>Subject is required!</p>}

        <input 
            type='text' 
            className='sendMail_message' 
            name='message'
            {...register('message',{ required: true})}    
        />
        {errors.message && <p className='sendMail_error'>Message is required!</p>}

        <div className='sendMail_options'>
            <button 
                className='sendMail_send' 
                type='submit'>
                Send
            </button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
