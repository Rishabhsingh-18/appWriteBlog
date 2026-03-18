import React,{useId} from 'react'

function Select({
    options,//kaunsa file select karna hai 
    label,
    className="",
    ...props
},ref) {
    const id=useId()
  return (

//simple way to write <select id ref ...props classname><option key and value>{option}</option></select>
//     <label htmlFor="country">Select Country</label>

// <select id="country">
//   <option value="">-- Choose --</option>
//   <option value="india">India</option>
//   <option value="usa">USA</option>
//   <option value="uk">UK</option>
// </select>
    <div className='w-full'>
        //this below line say if there is a label then only dispaly the label 
      {label && <label htmlFor={id} className=''>{label}</label>}

      <select {...props}   //because we have choose from many options
       id={id}
       ref={ref}
       className={` ${className}`}>
          {/* //now option mai loop run karo
          //options? .map() writing in this beacuse if no value in option then it will crash it so to avoid writing in ternary or if else is also good but for jsx map is the best  */}

          {options?.map((option)=> (
     <option key={option} value={option}> //key as option becasue all option will be unique
                {option}
                </option>
          ))}

      </select>
    </div>
  )
}

export default React.forwardRef(Select)
