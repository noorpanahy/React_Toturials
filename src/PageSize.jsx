
import React, {useState,useEffect} from "react";

function PageSize(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize",HundleChangeWidth);

        
    },[width,height]);

    useEffect(() => {
        document.title = `size: ${width} x ${height} `;
    },[width,height]);
    
    function HundleChangeWidth (){
        setWidth(window.innerWidth);
        setHeight(window.innerWidth);
    }

    return(
        <>
        <p>Width: {width}</p>
        <p>Height: {height}</p>
        </>
    );

}export default PageSize