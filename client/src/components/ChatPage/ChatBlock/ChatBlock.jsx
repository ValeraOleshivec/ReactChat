import React from "react";
import MessagesList from "./MessagesList/MessagesList";
import UsersList from "./UsersList/UsersList";
import classes from "./ChatBlock.module.css";
import Input from "./Input/Input";

const ChatBlock = () => {
  return (
    <>
      <UsersList />
      <MessagesList />
    </>
  );
};

export default ChatBlock;
