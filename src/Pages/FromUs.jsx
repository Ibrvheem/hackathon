import React from 'react'
import Button from '../components/Button'

function FromUs() {
  return (
    <div>
        <div className="home--container">
            <div className="welcome--user">
                <h1 style={{textAlign:'center', width:'100%'}}>FROM US  </h1>

            </div>
            <form action="" className='login--form'>
                <input type = 'text' placeholder = 'Enter Amount' />
                <input type = 'password' placeholder = 'Enter Number'/>
                <Button style ='button-blue' text = 'Proceed'/>
            </form>


        </div>
    </div>
  )
}

export default FromUs
