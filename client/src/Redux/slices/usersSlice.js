import { createSlice } from "@reduxjs/toolkit";
import socketIO from "socket.io-client";
import message from "../../components/ChatPage/ChatBlock/MessagesList/Message/Message";
import messagesList from "../../components/ChatPage/ChatBlock/MessagesList/MessagesList";
export const socket = socketIO.connect("https://main--reliable-yeot-bdb44f.netlify.app");

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
const newMessage = function (id,name,text){
  let message={
    id,
    name,
    text
  };
  return message
}

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
