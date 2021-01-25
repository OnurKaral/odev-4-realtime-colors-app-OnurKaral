import {useEffect, useContext } from "react";
import './App.css';
import ColorPicker from "./components/Colorpicker";
import {initSocket, disconnectSocket,recieveColor} from "./socketServices"
import SetColorContext from "./contexts/SetColorContext";

function Container() {
  const { color, setColor } = useContext(SetColorContext);

  useEffect(() => {
  initSocket();
  recieveColor(color => { 
    console.log(color);

    setColor(color);
  })
  return () => disconnectSocket();
}, [setColor]);

  return (
    <div  style={{ backgroundColor: color }} > 
    <ColorPicker />
    </div>
  );
}

export default Container;