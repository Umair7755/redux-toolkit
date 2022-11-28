import { createSlice } from "@reduxjs/toolkit"
import { usersList } from "../UsersList "


export const userSlice = createSlice({
    name: "user",
    initialState: { value: [], loading: false,loader:false},
    reducers: {
        getUSers: (state, action) => {
            state.value = action.payload
         },
         setloading:(state,action)=>{
            state.loading= action.payload
         },
         setloader:(state,action)=>{
            state.loader= action.payload
         }
         
    }
})
export const { getUSers,setloading ,setloader} = userSlice.actions
export default userSlice.reducer