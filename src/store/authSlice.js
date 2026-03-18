// import { createSlice } from "@reduxjs/toolkit";


// const  initialState={
//    status:false,//user is not authicated
//    userdata:null //no userdata initailly
// }


// export const authslice=createSlice({
//     name:"auth",
//     initialState,
//     reducers:{ //it an object and it have function  and reducer is all about (state,action) callback function
//   login:(state,action)=>{
//    state.status=true;
//    state.userdata=action.payload.userdata //just like action.payload.id

//   },

  
//     logout:(state,action)=>{ //here no used of action ie payload
//         state.status=false;
//         state.userdata=null;

//     },
    
//   },



// });

// export const {login,logout}=authslice.actions




// export default authslice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
};

export const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {

        login: (state, action) => {
            state.status = true;
            state.userData = action.payload; 
        },

        logout: (state) => {
            state.status = false;
            state.userData = null;
        }

    }

});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;