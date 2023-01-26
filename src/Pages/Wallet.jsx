import React from 'react'
import Button from '../components/Button'
import Swal from 'sweetalert2'


import './Wallet.css'
function Wallet() {
    function alert(){
        Swal.fire({
            title:'ARE YOU SURE',
            showCancelButton: true,
            icon: 'warning',
            confirmButtonText: 'PROCEED!',
            cancelButtonText: 'CANCEL',
          }).then((result) => {
            if (result.value) {
              document.querySelector('.swal2-confirm').textContent = 'Deleting...';
              // Do your logic here
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              document.querySelector('.swal2-cancel').textContent = 'Cancelling...';
              // Do your logic here
            }
          })

    }
  return (
    <div>
        <div className="wallet--container">
            <div className="welcome--user">
                <h1 style={{textAlign:'center', width:'100%'}}>FUND WALLETX   </h1>

            </div>

            <form action="">
                <input type="number" placeholder='Enter Amount' />
                <input type="number" placeholder='Card Number' />
                <input type="date" placeholder='Enter Expiry Date'/>
                <input type="number" placeholder='Enter CVV'/>
                <Button text = 'PROCEED' style= 'button-white' handleClick = {alert}/>
                </form>
            </div>
        </div>
    
  )
}

export default Wallet
