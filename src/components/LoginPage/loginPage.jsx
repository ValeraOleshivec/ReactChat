import React from "react";
import classes from "./LoginPage.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useLists from "../../Hooks/useLists";

const LoginPage = (message) => {
  const randomNoun = [
    "environment",
    "worker",
    "tale",
    "collection",
    "river",
    "reflection",
    "replacement",
    "photo",
    "assumption",
    "examination",
    "skill",
    "housing",
    "week",
    "friendship",
    "procedure",
    "night",
    "restaurant",
    "person",
    "surgery",
    "society",
    "gene",
    "debt",
    "map",
    "effort",
    "wife",
    "conclusion",
    "health",
    "selection",
    "guest",
    "beer",
    "medicine",
    "anxiety",
    "bathroom",
    "wealth",
    "government",
    "thought",
    "entry",
    "introduction",
    "television",
    "product",
    "politics",
    "director",
    "relationship",
    "driver",
    "extent",
    "youth",
    "inflation",
    "bath",
    "poet",
    "reputation",
  ];
  const randomAdjective = [
    "exultant",
    "burly",
    "perfect",
    "daffy",
    "lovely",
    "rapid",
    "vulgar",
    "pricey",
    "clumsy",
    "amazing",
    "murky",
    "hulking",
    "puny",
    "cuddly",
    "male",
    "panicky",
    "unadvised",
    "stiff",
    "grandiose",
    "valuable",
    "mental",
    "weary",
    "dusty",
    "fearless",
    "literate",
    "astonishing",
    "inquisitive",
    "second-hand",
    "neighborly",
    "messy",
    "earthy",
    "better",
    "shiny",
    "vast",
    "early",
    "habitual",
    "unused",
    "gigantic",
    "obese",
    "agonizing",
    "grumpy",
    "strong",
    "nonchalant",
    "protective",
    "cooing",
    "loud",
    "puzzled",
    "regular",
    "jagged",
    "luxuriant",
  ];
  const socket = useSelector((state) => state.userSlice.socket);
  const {getNewUser,getArray,pushNewMessages} = useLists();
  let arrayAvatar = [];
  let promise = fetch('https://64ed912a1f87218271416407.mockapi.io/People').then((res)=>{
    return res.json()
        .then((res)=>{
          arrayAvatar=res;
          console.log()
        })
  })


  const loginFunction = () => {
    let Noun = randomNoun[Math.floor(Math.random() * randomNoun.length)];
    let Adjective =
      randomAdjective[Math.floor(Math.random() * randomAdjective.length)];
    let userName = `${
      Adjective.charAt(0).toUpperCase() + Adjective.slice(1)
    } ${Noun}`;
    let Avatar = arrayAvatar[Math.floor(Math.random()*arrayAvatar.length)].imageUrl
    socket.emit("new User");
    socket.on("getUser", (value) => {
      getNewUser(value, userName,Avatar);
      sessionStorage.setItem('id',value)
    });
    socket.on('joinUser',(data)=>{
      getArray(data)
    })
    socket.on('giveMessageList',(data)=>{
      pushNewMessages(data)
    })
    sessionStorage.setItem("user", userName);
    sessionStorage.setItem("avatar", Avatar);
  };
  return (
    <div className={classes.background}>
      <div>{message.message}</div>
      <Link to="/chat" onClick={loginFunction}>
        <button type="submit">Войти</button>
      </Link>
    </div>
  );
};

export default LoginPage;
