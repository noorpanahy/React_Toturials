import React,{useState,useEffect,useRef} from "react";

function RefComponent(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component Rerendered.");
    });

    function HandleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = 'Green';
        inputRef2.current.style.backgroundColor = '';
        inputRef3.current.style.backgroundColor = '';
    }
    function HandleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = '';
        inputRef2.current.style.backgroundColor = 'Green';
        inputRef3.current.style.backgroundColor = '';
    }
    function HandleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = '';
        inputRef2.current.style.backgroundColor = '';
        inputRef3.current.style.backgroundColor = 'Green';
    }

    return(
        <div>
            <button onClick={HandleClick1}>Click me</button>
        <input ref={inputRef1}/>

        <button onClick={HandleClick2}>Click me</button>
        <input ref={inputRef2}/>

        <button onClick={HandleClick3}>Click me</button>
        <input ref={inputRef3}/>
        </div>
    );

}export default RefComponent