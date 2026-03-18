// import React,{useState} from 'react'
// import {data, Link,useNavigate } from'react-router-dom'
// import {login } from '../store/authslice' //here login as authLogin means instaed of writing login we will write authLogin
// import {Button,Input,Logo} from './index'
// import { useDispatch } from 'react-redux'
// import AuthService from '../appwrite/auth'
// import {useForm} from "react-hook-form"


// function Login() {
//     const navigate=useNavigate() //when user click on login  redirect to login page 
//     const dispatch=useDispatch() //to update the value in the state 
// const {register,handleSubmit}=useForm() //register in not that  like register in app wala here it a syntax   and handlesubmit it method that execute after click 

// const [error,seterror]=useState("") //this if login fails then show some message by usestate
// const handleLogin /*It is used here <form onSubmit={handleSubmit(handlelogin)}> */=async(data)=>{ /*
//     so here the variable login will be pass <form onsubmit={handlesubmit(the variable login) </form>}
//     and data is Where Does data Come From?
// 1)It comes from React Hook Form.
// You probably wrote something like this:const { register, handleSubmit } = useForm();
// 2)And in your form:<form onSubmit={handleSubmit(login)}> 
// 3) your inputs are:
// <Input {...register("email")} />
// <Input {...register("password")} />

// 4)And user types:
// email: rishabh@gmail.com
// password: 123456

// Then React Hook Form creates:
// data = {
//    email: "rishabh@gmail.com",
//    password: "123456"
// }

// And automatically calls:login(data) ->So Is data Just a Term

//      */
//     seterror("")//claen the error just like after taking input from user we clean the input feild for the next input  
//     try {
//        const session= await AuthService.login(data)

//        if(session){
//         const userdata=await AuthService.getCurrentUser()

//         if(userdata) dispatch(login(userdata)) /*This login comes from Redux slice:

// export const { login, logout } = authslice.actions

// This login:

// 👉 Is Redux action creator
// 👉 Updates state.status
// 👉 Stores userdata in Redux

// It is NOT the same as:

// const login (your component function) */
            
//             //data is stored  in redux state that is in reducer 
//         //if userdata exist then send the user to homepage using navigate url of home 
//         navigate("/") 
//        }
//     } catch (error) {
//         seterror(error.message)
//     }
// }

 
//   return (
//     <div
//     className='flex items-center justify-center w-full'
//     >
//         <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
//         <div className="mb-2 flex justify-center">
//                     <span className="inline-block w-full max-w-[100px]">
//                         <Logo width="100%" />
//                     </span>
//         </div>
//         <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
//         <p className="mt-2 text-center text-base text-black/60">
//                      Don&apos;t have any account?&nbsp;
//                     {/* //  then give the sig up link just like a href  */}
//                     <Link
//                         to="/signup"
//                         className="font-medium text-primary transition-all duration-200 hover:underline"
//                     >
//                         Sign Up
//                     </Link>
//         </p>
//         {/* if there  is a error like invalid number or somethimg themn dispaly */}
//         {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

//         {/* now all concept of<form onsubmit={handlesubmit of useform (login of try and catch wla athat we have creted in line no 16)}></form> */}

//         <form onSubmit={handleSubmit(handleLogin)} className='mt-8'>  
//             <div className='space-y-5'>
//                 <Input  
//                 label="Email: "
//                 placeholder="Enter your email"
//                 type="email" //just like text but email give us @ use karna 
//                   // {...register(key ,{value is like option ie required ie compulsory write email 2)option is pattern ie we write validate  ie pattern matching validatre:{matchpattern:(value)=>{}} } )}
//                 {...register("email", {
//                     required: true,
//                     validate: {
//                         matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test 
//                          //this is regular Expression
//                         (value) ||
//                         "Email address must be a valid address",
//                     }
//                 })}
//                 />
//                 <Input
//                 label="Password: "
//                 type="password"
//                 placeholder="Enter your password"
//                 // {...register()}
//                 {...register("password", {
//                     required: true,
//                       minLength: {
//                                value: 6,
//                               message: "Password must be at least 6 characters"
//                       }
//                 })} 
//                 />
//                 <Button
//                 type="submit"
//                 className="w-full"
//                 >Sign in</Button>
//             </div>
//         </form>
//         </div>
//     </div>
//   )
// }

// export default Login


import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login