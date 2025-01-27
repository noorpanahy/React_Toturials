
import React, {useState} from "react";

function ColorPicker (){

    const [color, setcolor] = useState("#FFFFFF");

    const ColorHundler = (event) => {
        setcolor(event.target.value);
    }

    return(
        <div className="Color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
            <p>selected Color: {color}</p>
            </div>
            <label>Select a color:</label>
            <input type="color" value={color} onChange={ColorHundler} />
        </div>
    );


}export default ColorPicker