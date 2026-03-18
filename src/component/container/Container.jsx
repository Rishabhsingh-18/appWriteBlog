// import React from 'react'

// //so basically container is used to give styling if we want to change directly change here and {children} this like props passing that is to show value 

// function Container({children}) {//except properties as children so in conatiner we define height width styling properties  etc and dispaly the value directly
// //   return (
// //     <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>
// // //   )  this can be also written without parenthesis  
//    return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>; 
// //    here semicolon to indicate this is one line

  
// }

// export default Container  


import React from 'react'

function Container({children}) {
  return  <div className="w-full max-w-[1400px] mx-auto px-4">{children}</div>;
  
}

export default Container