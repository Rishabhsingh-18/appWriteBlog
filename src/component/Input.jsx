import React,{useId} from 'react'

const Input=React.forwardRef(function Input({
    label,  //name,address,email ie palceholder 
    type="text",
    className="",
    ...props
},ref){

    const id=useId()  //to generate unique id 
    return (
     <div className='w-full'>
        {label && <label className='block mb-1' htmlFor={id}>{label}</label> }
        <input 
        type={type}
        className={`${className}`}
        ref={ref} //this were the concept of react forward reference  hook
         {...props}
         id={id}
         />
     </div>

    )
})

export default Input
