import React from 'react';
import './Login.css';
import { Button } from '@mui/material';
import { auth, provider  } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import  { login }  from '../features/userSlice';
import { useDispatch } from 'react-redux';

function Login() {
    const dispatch = useDispatch();

    const signIn = async () => {
        try {
            await signInWithPopup(auth, provider)
            .then(({ user }) => {
                dispatch(
                    login({
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                }))
            })
        } catch (error) {
            alert(error.message)
        }
    }

  return (
    <div className='login'>
      <div className='login_container'>
        <img src='https://cdn.icon-icons.com/icons2/2631/PNG/512/gmail_new_logo_icon_159149.png' alt='login-image' />
        <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
      </div>
    </div>
  )
}

