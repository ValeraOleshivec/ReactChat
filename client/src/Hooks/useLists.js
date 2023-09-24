import { useDispatch, useSelector } from "react-redux";
import {addMessage, addUser, getList} from "../Redux/slices/usersSlice";

const useLists = (value,name,Avatar,data,messages) => {
  const dispatch = useDispatch();
  const socket = useSelector((state) => state.userSlice.socket);
  let userList = useSelector((state) => state.userSlice.obj);
  let messageList = useSelector((state)=>state.userSlice.messages)
  const getArray = (data) =>{dispatch(getList(data));
  }
  const getNewUser = (value,name,Avatar)=> {dispatch(addUser([value,name,Avatar]));
    socket.emit("askArray");
    socket.on("getArray", (data) => {
      dispatch(getList(data));
    });
  }
  const pushNewMessages = (messages) =>{
    dispatch(addMessage(messages))
  }

  return {userList,getNewUser,getArray,messageList,pushNewMessages,socket};
};

export default useLists;
