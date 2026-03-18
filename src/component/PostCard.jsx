// import React from 'react'
// //postcard mean we will have diff diff card and when we click on any card then it will open to read further articles 


// import appwriteService from "../appwrite/config"
// import {Link} from"react-router-dom"


// function PostCard({$id,title,featuredImage}) { 
//      //here $id is written beacuse it is fixed in appwrite 
//   return (
//     //we use link instead of a href 
//     <Link to={`/post/${$id}`}> 

//     <div className='w-full bg-gray-100 erounded-xl p-4'>
//         <div className='w-full justify-center mb-4'>
//             <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
//              {/* //we have created in config.js as getFilePreview which return fileid  */}
//         </div>
//         <h2 className='text-xl font-bold'>{title}</h2>
//     </div>
//     </Link>
//   )
// }

// export default PostCard

import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 cursor-pointer hover:shadow-lg transition">
        
        <div className="w-full mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl w-full h-48 object-cover"
          />
        </div>

        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;