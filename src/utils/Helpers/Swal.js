import Swal from 'sweetalert2'


export const ConfirmSwal = async (text) => {
    const result = await Swal.fire({
        title: 'Are you sure?',
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!',
        cancelButtonText: 'No'
    })
    return result.isConfirmed
}

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})


export const successSwal = (state) => {
    Toast.fire({
        icon: 'success',
        title: `${state}`
    })
}

export const errorSwal = (state) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: state,
    })
}

export const bookingConfirm = async (date, time) => {
    const result = await Swal.fire({
        title: 'Confirm Your Selection',
        text: `You have selected the time slot ${time} on ${date} !`,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm'
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         Swal.fire(
        //             'Deleted!',
        //             'Your file has been deleted.',
        //             'success'
        //         )
        //     }
    })
    return result.isConfirmed
}

