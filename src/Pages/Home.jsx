import React from 'react'
import Button from '../components/Button'
import './Home.css'

function Home() {
  return (
    <div>
        <div className="home--container">
            <div className="welcome--user">
                <h5>Welcome User</h5>
                <img src="" height='50rem' width= '50rem'alt="" />
            </div>
                {/* <div className="text">
                    <h6>WHAT DO YOU WANT TO DO</h6>
                </div> */}
            <div className="options">
                <div className="buttons">
                    <Button text ='BUY' style = 'button-blue'/>
                    <Button text = 'SELL' style= 'button-blue'/>
                </div>
            </div>
            <div className="wallet">
                <Button text = 'Fund Wallet' style = 'button-blue'/>
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
