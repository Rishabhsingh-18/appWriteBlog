// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import {useDispatch} from 'react-redux'
// import AuthService from "./appwrite/auth"
// import {login,logout} from "./store/authslice"
// import { Header } from '../component'
// import { Outlet } from 'react-router-dom'

// function App() {
// //  console.log(import.meta.env.VITE_APPWRITE_URL);
  
// //loading  state to get data from appwrite  
// const [loading,setloading]=useState(true)
// const dispatch=useDispatch()

// //useeffect use for fetching data as we already know useefect is used when we want fetch data from url or database
// useEffect(()=>{
// AuthService.getCurrentUser()//to get info about currentuser
// .then((userdata)=>{
//   if(userdata){
//     dispatch(login({userdata}))
     
//   }else{//if no userdatafound
//     dispatch(logout()) //we dont get teh data of user so logout ie no parameter is passed
//   }
// })     //then is used that data we have got
// .finally(()=>setloading(false))// 

// }
// ,[]);
// return !loading ? (
//   <div className='min-h-sc flex flex-wrap content-between'>
//     <div className='w-full block'>
//       <Header/>
//       <Footer/>
//       <main>
//        TODO:  {/* <Outlet/> */}
//       </main>
//     </div>
//   </div>
// ) : null




 
// // }

// // export default App


import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import AuthService from "./appwrite/auth";
import { login, logout } from "./store/authslice";
import { Header, Footer } from "./component";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
  AuthService.getCurrentUser()
    .then((userdata) => {
      if (userdata) {
        dispatch(login(userdata)); 
      } else {
        dispatch(logout());
      }
    })
    .finally(() => setLoading(false));
}, []);


  

  return !loading ? (
   <div className="min-h-screen w-full bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
// import React, { useEffect } from "react";
// import { Outlet } from "react-router-dom";
// import authService from "./appwrite/auth";
// import { useDispatch } from "react-redux";
// import { login, logout } from "./store/authSlice";

// function App() {

//   const dispatch = useDispatch();

//   useEffect(() => {

//     authService.getCurrentUser()
//       .then((userData) => {

//         if (userData) {
//           dispatch(login({ userData }));
//         } else {
//           dispatch(logout());
//         }

//       })
//       .catch(() => dispatch(logout()));

//   }, []);

//   return (
//     <div>
//       <Outlet />
//     </div>
//   );
// }

// export default App;


// import React, { useEffect } from "react";
// import { Outlet } from "react-router-dom";
// import authService from "./appwrite/auth";
// import { useDispatch } from "react-redux";
// import { login, logout } from "./store/authSlice";

// function App() {

//     const dispatch = useDispatch();

//     useEffect(() => {

//         authService.getCurrentUser()
//             .then((userData) => {

//                 if (userData) {
//                     dispatch(login(userData));
//                 } else {
//                     dispatch(logout());
//                 }

//             })
//             .catch(() => dispatch(logout()));

//     }, []);

//     return (
//         <div>
//             <Outlet />
//         </div>
//     );
// }

// export default App;