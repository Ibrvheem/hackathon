import React from 'react'
import { Link } from 'react-router-dom'
import './Sell.css'

function Sell() {
  return (
    <div className='sell--container' >
                <Link to = '/Home' style={{marginRight:'auto'}}>
                <img src="./Images/arrow-left-solid.svg" style={{height:'2rem', marginRight: 'auto'}} alt="" />
            </Link>

        <h2>Hello Vendor</h2>
        <h4 >ALL SALES OF AIRTIME WILL BE MADE AT 10% DISCOUNT</h4   > 
        
            <ul>
                <img src="" height='50px' width='50px' alt="" />
                <li>1234556789</li>
                <li>John Doe</li>

            </ul>
            <ul>
                <img src="" height='50px' width='50px' alt="" />
                <li>1234556789</li>
                <li>John Doe</li>

            </ul>
            <ul>
                <img src="" height='50px' width='50px' alt="" />
                <li>1234556789</li>
                <li>John Doe</li>

            </ul>
            <ul>
                <img src="" height='50px' width='50px' alt="" />
                <li>1234556789</li>
                <li>John Doe</li>

            </ul>
    
    </div>
  )
}

export default Sell
