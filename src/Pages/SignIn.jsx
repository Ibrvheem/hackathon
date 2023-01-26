import React from 'react'
import './SignIn.css'
import Button from '../components/Button'

function SignIn() {
  return (
    <div className='login--container'>
        <h1>Sign In</h1>
        <form action="" className='login--form'>
            <input type = 'text' placeholder = 'username' />
            <input type = 'password' placeholder = 'password'/>
            <Button style ='button-blue' text = 'Sign in'/>
        </form>
    </div>
  )
}

export default SignIn