import {useEffect, useContext } from "react";
import './App.css';
import ColorPicker from "./components/Colorpicker";
import {initSocket, disconnectSocket,recieveColor} from "./socketServices"
import SetColorContext from "./contexts/setColorContext";

function App() {
  const { color, setColor } = useContext(SetColorContext);

  useEffect(() => {
  initSocket();
  recieveColor((color) => { setColor(color);
  });

  return () => disconnectSocket();
}, [setColor]);

  return (
    <div  > 
    <ColorPicker />
  
    </div>
  );
}

export default App;
