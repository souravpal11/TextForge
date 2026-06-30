import React,{useState,useEffect} from "react";
import {FaArrowUp} from "react-icons/fa";
import "../styles/ScrollTop.css";

export default function ScrollTop(){

const [show,setShow]=useState(false);

useEffect(()=>{

const handleScroll=()=>{

setShow(window.scrollY>350);

};

window.addEventListener("scroll",handleScroll);

return ()=>window.removeEventListener("scroll",handleScroll);

},[]);

const top=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

return(

<button

className={`z-10 top-btn ${show?"show":""}`}

onClick={top}

>

<FaArrowUp/>

</button>

);

}