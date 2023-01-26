import React, { useState } from 'react'
import './SignIn.css'
import Button from '../components/Button'
import { useNavigate } from "react-router-dom";
import { API_URL } from '../constants/apiConstants';
import axios from 'axios';

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let navigate = useNavigate();

  const doSubmit = () => {
        axios({
            url:API_URL+'/login',
            method:'post',
            headers:{'Content-Type':'application/json'},
            data: {email:email, password:password}
        }).then((response) =>{
          console.log(response)
          localStorage.setItem('user', JSON.stringify(response.data.user))
          localStorage.setItem('token', response.data.token)
          navigate("/home")
        })
}
  return (
    <div className='login--container'>
        <h1>Sign In</h1>
        <form className='login--form'>
            <input type = 'text' placeholder = 'username' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input type = 'password' placeholder = 'password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <h5><a href=''>Forgot password?</a></h5>
            <button className='button-white' onClick={(e)=>{e.preventDefault(); doSubmit()}} >Sign In</button>
            <h5 style={{textAlign:'left', marginTop: '1rem'}}><a href="/Signup">DONT HAVE AN ACCOUNT?</a></h5>
        </form>
    </div>
  )
}

export default SignIn