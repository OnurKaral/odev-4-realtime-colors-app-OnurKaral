import {React} from "react";
import './App.css';
import Container from "./Container";
import {SetColorProvider} from "./contexts/SetColorContext";

function App() {
  return (
    <div  > 

      <SetColorProvider>

        <Container />
        
      </SetColorProvider>
  
    </div>
  );
}

export default App;
