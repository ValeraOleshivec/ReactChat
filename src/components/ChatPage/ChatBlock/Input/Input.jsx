import React, {useState} from "react";
import classes from "./Input.module.css";
import useLists from "../../../../Hooks/useLists";
import {useSelector} from "react-redux";

const Input = () => {
    const {pushNewMessages,socket} = useLists()
    const [value,setValue] = useState('')
    const [image,setImage] = useState('')
    const sendMessage = ()=>{
        let name = sessionStorage.getItem('user')
        let id = sessionStorage.getItem('id')
        socket.emit('NewMessage',{id,name,value,image})
        setValue('')
    }
    const uploadImage=(e)=>{
        console.log(e.target.files)
        const data = new FileReader()
        data.addEventListener('load',()=>{
            setImage(data.result)
        })
        data.readAsDataURL(e.target.files[0])
    }
  return (
    <div className={classes.block}>
      <input className={classes.inputText} placeholder="Введите сообщение" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <input className={classes.inputFile} type='file' onChange={uploadImage}/>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default Input;
