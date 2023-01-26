import React from 'react'
import Button from '../components/Button'
import Swal from 'sweetalert2'


function FromUs() {
    function alert(){
        Swal.fire({
            title:'SUCCESS',
            showCancelButton: true,
            confirmButtonText: 'GO TO HOMEPAGE!',
            cancelButtonText: 'RETRY',
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
        <div className="home--container">
            <div className="welcome--user">
                <h1 style={{textAlign:'center', width:'100%'}}>FROM US  </h1>

            </div>
            <form action="" className='login--form'>
                <input type = 'text' placeholder = 'Enter Amount' />
                <input type = 'password' placeholder = 'Enter Number'/>
                <Button style ='button-white' text = 'Proceed' handleClick = {alert}/>
            </form>


        </div>
    </div>
  )
}

export default FromUs
