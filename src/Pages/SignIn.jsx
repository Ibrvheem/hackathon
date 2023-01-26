import React from 'react'
import './SignIn.css'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className='login--container'>
        <h1>Sign In</h1>
        <form action="" className='login--form'>
            <input type = 'text' placeholder = 'username' />
            <input type = 'password' placeholder = 'password'/>
            <h5><a href=''>Forgot password?</a></h5>
            <Link to = '/Home'>
                <Button style ='button-white' text = 'Sign in' link = '/Home'/>
            </Link>
            <h5 style={{textAlign:'left', marginTop: '1rem'}}></h5>
        </form>
    </div>
  )
}

export default SignIn