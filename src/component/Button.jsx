// import React from 'react'


// //we are making  a file of name button.jsx because in this project when ever we need button directly call this and here we wil give input type,css 

// 2)//here children means text on this button 2)type ie button  etc
// function Button({children,type='button',bgColor='bg-blue-600',textColor='text-white', className='', //classnmme empty always
//     ...props  //if more properties as been pass by user so that by we have used ...props 

// }) { 
//   return (
//     <button className={`px-4 py-2 rounded-lg  ${bgColor}  ${textColor}  ${className}`}  {...props}>{children}</button>  //here ${className} the value will be coming from className that we define empty and the value will be pass by user  and same for bgcolor and textcolor
//   )
// }

// export default Button
import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button
            type={type}
            className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}