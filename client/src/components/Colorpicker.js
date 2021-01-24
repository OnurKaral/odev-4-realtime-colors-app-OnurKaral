import React ,{useContext, useState} from 'react';
import { SketchPicker } from 'react-color';
import styles from "../components/styles.module.css";
import {sendcolor } from "../socketServices"
import SetColorContext from "../contexts/setColorContext";

function ColorPicker() {
    const [color, setColor, ] = useState("#fff")
    const handleColor = () => {
        sendcolor(color);
      };

      return  (
        <div  className={styles.homepagestyle}  style={{ backgroundColor: color }}> 
        
        <SketchPicker  color= { color}
         onChange={updatedColor =>setColor(updatedColor.hex)  }  
         
         />
        <h2> Current Hex Code: {color} </h2>
        <button onClick={handleColor} > Change Color</button>

        </div>
      );
    }
    export default ColorPicker