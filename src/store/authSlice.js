import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userLogged: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SetUserLog: (state, action)=>{
      state.userLogged = action.payload;
    },
    ClearUser: (state) =>{
      state.userLogged = null;
    },
  },
})

export const { SetUserLog, ClearUser } = userSlice.actions

export default userSlice.reducer