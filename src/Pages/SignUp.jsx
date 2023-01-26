import React, { useState } from 'react'
import './SignIn.css'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { API_URL } from '../constants/apiConstants';
import axios from 'axios';

function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [provider, setProvider] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [accountName, setAccountName] = useState('')
  const [bank, setBank] = useState('')
  const [password, setPassword] = useState('')

  const doSubmit = () => {
        console.log(name);
        axios({
            url:API_URL+'/register',
            method:'post',
            headers:{'Content-Type':'application/json'},
            data: {name:name, email:email, provider:provider, password:password, phone:phoneNumber, account_number:accountNumber, account_name:accountName, bank:bank}
        }).then((response) =>{
            if (response?.data?.user?.id) {
                alert('New user registered successfully, please login!');
            }
        }).catch(()=>{
            alert('There was an error registering you!');
        });
}

  return (
    <div className='login--container'>
        <h1>Sign Up</h1>
        <form className='login--form'>
            <input name="name" type = 'text' placeholder = 'Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
            <input name="email" type = 'text' placeholder = 'Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input name="phone_number" type='text' placeholder = 'Phone Number' value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} />
            <select name='provider' value={provider} onChange={(e)=>{setProvider(e.target.value)}}>
              <option>MTN</option>
              <option>Airtel</option>
              <option>Glo</option>
            </select>
            <input name="account_number" type = 'text' placeholder = 'Account Number' value={accountNumber} onChange={(e)=>{setAccountNumber(e.target.value)}} />
            <input name="account_name" type = 'text' placeholder = 'Account Name' value={accountName} onChange={(e)=>{setAccountName(e.target.value)}} />
            <input name="bank" type = 'text' placeholder = 'Bank'value={bank} onChange={(e)=>{setBank(e.target.value)}} />
            <input name="password" type="password" placeholder = 'password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <button onClick={(e)=>{e.preventDefault();doSubmit()}}>Join</button>
            <h5 style={{textAlign:'left', marginTop: '1rem'}}><a href="/">LOGIN INSTEAD?</a></h5>
        </form>
    </div>
  )
}

export default SignUp