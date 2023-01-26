import React from 'react'
import Button from '../components/Button'
import './Home.css'

function Home() {
  return (
    <div>
        <div className="home--container">
            <div className="welcome--user">
                <h5 style={{textAlign:'left'}}>Welcome User</h5>
                <div className="profile--pic">
                    <img src="" height='50rem' width= '50rem'alt="" />
                </div>
                <p>Accout Balance</p>
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
                <Button text = 'Fund Wallet' style = 'button-white'/>
            </div>
            <div className="activity-log">
                <ul>
                    <li>You funded your wallet</li>
                    <li>You funded your wallet</li>
                    <li>You funded your wallet</li>
                </ul>
            </div>


        </div>
      
    </div>
  )
}

export default Home
