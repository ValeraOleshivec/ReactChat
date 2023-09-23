import React from "react";
import classes from "./UserCard.module.css";

const UserCard = (props) => {
  return (
    <div className={classes.Card}>
      <div className={classes.Card__Image}>
        <img src={props.img} alt='' />
      </div>
        <p>{props.name}</p>
    </div>
  );
};

export default UserCard;
