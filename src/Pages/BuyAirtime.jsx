import React from 'react'
import './BuyAirtime.css'
import Button from '../components/Button'

function BuyAirtime() {
  return (
    <div>
        <div className="buyAirtime--container">
            <div className="welcome--user">
                <h1 style={{textAlign:'center', width:'100%'}}>BUY AIRTIME</h1>
                {/* <img src="" height='50rem' width= '50rem'alt="" /> */}
            </div>
                {/* <div className="text">
                    <h6>WHAT DO YOU WANT TO DO</h6>
                </div> */}
            <div className="options">
                <div className="buttons ">
                    <Button text ='DIRECT' link = '/FromUs' style = 'button-white'/>
                    <Button text = 'INDIRECT' link = '/Waitlist' style= 'button-white'/>
                </div>
            </div>
            {/* <div className="wallet">
                <Button text = 'Fund Wallet' style = 'button-white'/>
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
