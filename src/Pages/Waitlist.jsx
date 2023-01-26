import React, { useState } from 'react'
import Button from '../components/Button'
import Swal from 'sweetalert2'
import { API_URL } from '../constants/apiConstants';
import axios from 'axios';


function Waitlist() {

  const [phone, setPhone] = useState("")
  const [unit, setUnit] = useState("")
  const token = localStorage.getItem('token')

  const doSubmit = () => {
    axios({
        url:API_URL+'/airtime',
        method:'post',
        headers:{'Content-Type':'application/json', 'Authorization':'Bearer '+token},
        data: {type:'indirect', phone_number:phone, unit:parseInt(unit)}
    }).then((response) =>{
      alert(response.data.message);
      // navigate("/home");
    })
}
    function alert(message){
        Swal.fire({
            title:message? message:'Success',
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
                <input type = 'text' placeholder = 'Enter Amount' value={unit} onChange={(e)=>{setUnit(e.target.value)}}/>
                <input type = 'phone' placeholder = 'Enter Number' value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                <Button style ='button-white' text = 'Proceed' handleClick = {doSubmit}/>
            </form>


        </div>
    </div>
  )
}

export default Waitlist
