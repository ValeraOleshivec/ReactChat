import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {
  return (
    <>
        {sessionStorage.getItem('id')===props.value.id ?
                <div className={classes.myMessage}>
                    <p>{props.value.value}</p>
                  {props.value.image !== '' ?
                    <img className={classes.imageMessage} src={props.value.image} alt=''/>
                      : ''}
                </div>
            :
                <div className={classes.message}>
                    <p>{props.value.value}</p>
                    {props.value.image !== '' ?
                      <img className={classes.imageMessage} src={props.value.image} alt=''/>
                      : ''}
                </div>
        }
    </>
  );
};

export default Message;
