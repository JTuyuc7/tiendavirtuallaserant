import React from 'react';
import Swal from 'sweetalert2';

const AlertComponent = () => {

    Swal.fire({
        title: '!Oops',
        text: 'Something went wrong',
        icon: 'error',
        showCancelButton: false,
        confirmButtonColor: '#3085f6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Go Home',
        cancelButtonText: 'Cancel'
    }).then( (res) => {
        if(res.isConfirmed){
            console.log('confirmation')
        }
        console.log(res.dismiss, 'valor')
        if(res.dismiss === 'cancel'){
            console.log('cancel alert')
        }
    })

    return(
        <>
        
        </>
    )
}

export default AlertComponent;