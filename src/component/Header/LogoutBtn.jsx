// import React from 'react'
// import {useDispatch} from 'react-redux'
// import authService from '../../appwrite/auth' 
// import {logout} from '../../store/authSlice'

// function LogoutBtn(){
//     const dispatch = useDispatch()
//     const logoutHandler = () => {
//         authService.logout().then(() => {  //.then is used because authservice.logout rreturn promise 
//             dispatch(logout()) //update the information 
//         })
//     }
//   return (
//     <button
//     className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//     onClick={logoutHandler}
//     >Logout</button>
//   )
// }

// export default LogoutBtn


import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn