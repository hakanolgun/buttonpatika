import React, {useState,useEffect} from 'react'
import styles from './styles.module.css'



export const Button = (props) => {
  const [myType, setMyType ] = useState("primary");

  useEffect(() => {
    const myValue = props.type;
    const myBtn = document.getElementsByClassName("btnpatika")[0];
    myBtn.classList.add(myValue);
    setMyType(myValue);
  }, [myType])


  return (<button {...props}>{props.text}</button>)
}