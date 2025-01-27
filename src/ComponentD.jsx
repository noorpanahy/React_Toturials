import React,{useState, useContext} from "react";
import {con} from './ComponentA.jsx';


function ComponentD(){

    const user = useContext(con);

    return(
    <div className="hh">
        <h1>container D</h1>
        <h2>bye {user}</h2>
    </div>
    );
}export default ComponentD


