import React from 'react'
import './SignIn.css'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='login--container'>
        <h1>Sign In</h1>
        <form action="" className='login--form'>
            <input type = 'text' placeholder = 'Name' />
            <input type = 'text' placeholder = 'Email' />
            <input type = 'number' placeholder = 'Phone Number' />
            <input type = 'text' placeholder = 'Network Provider' />
            <input type = 'text' placeholder = 'Account Number'/>
            <input type = 'text' placeholder = 'Account Name'/>
            <input type = 'text' placeholder = 'Bank'/>
            <input type="password" placeholder = 'password' />
            <h5><a href=''>Forgot password?</a></h5>
            <Link to = '/Home'>
                <Button style ='button-white' text = 'Sign in' link = '/Home'/>
            </Link>
            <h5 style={{textAlign:'left', marginTop: '1rem'}}><a href="">DONT HAVE AN ACCOUNT?</a></h5>
        </form>
    </div>
  )
}

export default SignUp