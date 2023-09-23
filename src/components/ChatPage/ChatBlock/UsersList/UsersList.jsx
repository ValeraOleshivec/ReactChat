import React, {useEffect} from "react";
import classes from "./UsersList.module.css";
import UserCard from "./UserCard/UserCard";
import useLists from "../../../../Hooks/useLists";
import {useSelector} from "react-redux";
const UsersList = () => {
    const socket = useSelector((state) => state.userSlice.socket);
    const {userList,getArray} = useLists();
    socket.on('NewArr',(arr)=>{
        getArray(arr)
        console.log('Отработал новый пользователь')
    })
  return (
    <aside>
      <div className={classes.Head}>
        <p>All people</p>
      </div>
      <div className={classes.UserCards}>
          {userList.map(value=>
              <UserCard key={value[0]} name={value[1]} img={value[2]}/>
          )}
      </div>
    </aside>
  );
};

export default UsersList;
