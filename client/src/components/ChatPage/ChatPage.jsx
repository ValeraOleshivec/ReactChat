import React from "react";
import classes from "./ChatPage.module.css";
import Header from "../Header/Header";
import ChatBlock from "./ChatBlock/ChatBlock";
import useLists from "../../Hooks/useLists";
import {useSelector} from "react-redux";
const ChatPage = () => {
  const {getArray,socket,pushNewMessages} = useLists();

  socket.on('refreshPage',(data)=>{
      console.log(data.users,'ХАй')
      getArray(data.users)
      pushNewMessages(data.messages)
    })
    socket.on('userDisconnect',(data)=>{
        getArray(data)
    })
  return (
    <>
      <Header />
      <main>
        <ChatBlock />
      </main>
    </>
  );
};

export default ChatPage;
