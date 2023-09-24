import React from "react";
import MessagesList from "./MessagesList/MessagesList";
import UsersList from "./UsersList/UsersList";

const ChatBlock = () => {
  return (
    <>
      <UsersList />
      <MessagesList />
    </>
  );
};

export default ChatBlock;
