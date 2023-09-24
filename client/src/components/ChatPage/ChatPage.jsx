import React from "react";
import classes from "./ChatPage.module.css";
import Header from "../Header/Header";
import ChatBlock from "./ChatBlock/ChatBlock";
import useLists from "../../Hooks/useLists";
const ChatPage = () => {
  const {getArray,socket,pushNewMessages} = useLists();

  socket.on('refreshPage',(data)=>{
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
