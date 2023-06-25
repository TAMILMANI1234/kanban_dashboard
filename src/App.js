import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Sidenavbar from "./Components/Sidenavbar/sidenavbar";
import Mobileapp from "./Components/Mobileapp/mobileapp";
import Websitedesign from "./Components/Websitedesign/website";
import Designsystem from "./Components/Designsystem/designsystem";
import Wireframe from "./Components/Wireframes/wireframes";

function App() {
  return (
    <BrowserRouter>
    <Sidenavbar>
      <Routes>
           <Route path="/" element={<Mobileapp />}/>
           <Route path="/websitedesign" element={<Websitedesign />}/>
           <Route path="/designsystem" element={<Designsystem />}/>
           <Route path="/wireframes" element={<Wireframe />}/>
          
       
      </Routes>
    </Sidenavbar >
  </BrowserRouter>
  );
}

export default App;
