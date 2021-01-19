import {useEffect } from "react";
import './App.css';
import {io} from "socket.io-client";

function App() {

useEffect(() => {
const socket = io("http://localhost:3000", {
  transports: ["websocket"]
});
socket.on("welcome",()=> console.log("Yeni kullanıcı"));

}, []);

  return (
    <div className="App"> </div>
  );
}
export default App;
