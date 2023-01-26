import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import './Home.css'
import { API_URL } from '../constants/apiConstants';
import axios from 'axios';

function Home() {

    const user = JSON.parse(localStorage.getItem("user"))
    const token = localStorage.getItem("token")
    const [transactions, setTransactions] = useState([])

    useEffect(()=>{
        axios({
            url:API_URL+'/transactions/'+user.wallet.id,
            method:'get',
            headers:{'Content-Type':'application/json', 'Authorization':'Bearer '+token},
        }).then((response) =>{
            setTransactions(response?.data)
        }).catch(()=>{
        });
    }, [token])
  return (
    <div>
        <div className="home--container">
            <div className="welcome--user">
                <h5 style={{textAlign:'left'}}>Welcome {user?.profile?.name}</h5>
                <div className="profile--pic">
                    <img src="" height='50rem' width= '50rem'alt="" />
                </div>
                <p>Accout Balance: {user?.wallet?.amount}</p>
            </div>
                {/* <div className="text">
                    <h6>WHAT DO YOU WANT TO DO</h6>
                </div> */}
            <div className="options">
                <div className="buttons">
                    <Button text ='BUY' style = 'button-white' link = '/BuyAirtime'/>
                    <Button text = 'SELL' style= 'button-white' link = '/Sell'/>
                </div>
            </div>
            <div className="wallet">
                <Button text = 'Fund Wallet'link = '/Wallet' style = 'button-white'/>
            </div>
            <div className="activity-log">
                <ul>
                    {
                        transactions.map((transaction)=>{
                            return <li>{transaction?.type} | {transaction?.amount}</li>
                        })
                    }
                </ul>
            </div>


        </div>
      
    </div>
  )
}

export default Home
