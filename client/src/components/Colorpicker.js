import React ,{useContext} from 'react';
import { SketchPicker } from 'react-color';
import styles from "../components/styles.module.css";
import {sendcolor } from "../socketServices"
import SetColorContext from "../contexts/SetColorContext";

function ColorPicker() {
    const {color, setColor} = useContext(SetColorContext);
    const handleColor = () => {
        sendcolor(color);
      };

      return  (
        <div  className={styles.homepagestyle}  style={{ backgroundColor: color }}> 
        
        <SketchPicker  color= { color}
         onChange={updatedColor =>setColor(updatedColor.hex)  }          
         />
        <h2> Current Hex Code: {color} </h2>
        <button onClick={handleColor} >Change Color</button>

        </div>
      );
    }
    export default ColorPicker