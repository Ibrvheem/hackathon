import React from 'react'
import './BuyAirtime.css'
import Button from '../components/Button'

function BuyAirtime() {
  return (
    <div>
        <div className="home--container">
            <div className="welcome--user">
                <h1 style={{textAlign:'center', width:'100%'}}>BUY AIRTIME</h1>
                {/* <img src="" height='50rem' width= '50rem'alt="" /> */}
            </div>
                {/* <div className="text">
                    <h6>WHAT DO YOU WANT TO DO</h6>
                </div> */}
            <div className="options">
                <div className="buttons ">
                    <Button text ='FROM US' style = 'button-blue'/>
                    <Button text = 'WAITLIST' style= 'button-blue'/>
                </div>
            </div>
            {/* <div className="wallet">
                <Button text = 'Fund Wallet' style = 'button-blue'/>
            </div>
            <div className="activity-log">
                <ul>
                    <li>You funded your wallet</li>
                    <li>You funded your wallet</li>
                    <li>You funded your wallet</li>
                </ul>
            </div> */}
        </div>
      
    </div>
  )
}

export default BuyAirtime
