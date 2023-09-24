import { createSlice } from "@reduxjs/toolkit";
import socketIO from "socket.io-client";
export const socket = socketIO.connect("https://reactchattest-djhc.onrender.com");

const initialState = {
  obj: [],
  socket:socket,
  messages:[]
};
const joinUser = function (id, name,Avatar) {
  let newUser = {
    id,
    name,
    Avatar,
  };
  return newUser;
};

export const userSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    addUser(state, action) {
      state.obj[[...action.payload][0]] = joinUser(...action.payload);
      socket.emit('pushUser',[...action.payload])
    },
    getList(state, action) {
      state.obj = action.payload;
    },
    addMessage(state,action){
      console.log(action.payload)
      state.messages=action.payload
    }
  },
});

export const { addUser, getList ,getSocket,addMessage} = userSlice.actions;

export default userSlice.reducer;
