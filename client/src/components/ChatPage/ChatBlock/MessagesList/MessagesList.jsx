import React from "react";
import classes from "./MessagesList.module.css";
import Message from "./Message/Message";
import Input from "../Input/Input";
import useLists from "../../../../Hooks/useLists";

const MessagesList = () => {
    let name = sessionStorage.getItem('user')
    let avatar = sessionStorage.getItem('avatar')
    const {messageList,socket,pushNewMessages} = useLists();
    socket.on("renderMessage",(data)=>{
        pushNewMessages(data)
    })
  return (
    <div className={classes.RightBlock}>
      <div className={classes.Head}>
        <div className={classes.Image}>
            <img src={avatar} alt=''/>
        </div>
        <p className={classes.Head__Name}>{name}</p>
      </div>
      <div className={classes.Messages}>
          {messageList.map((value)=>
              <Message value={value}/>
          )}
      </div>
      <Input />
    </div>
  );
};

export default MessagesList;
