import { BrowserRouter as Router,Routes, Route, Switch } from "react-router-dom";
import './App.css';
import { HomePage } from './pages/HomePage';
import { Profile } from "./pages/Profile";
import { About } from "./pages/About";
import Navbar from "./components/Navbar";
import ImageDetail from "./pages/ImageDetail";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar/>}/>
      </Routes>

       <Routes>
        
        <Route path="/" element= {<HomePage/>} />
        <Route path="/profile" element= {<Profile/>} />
        <Route path="/about" element= {<About/>} />
        <Route path="/ImageDetail/:id" element={<ImageDetail />} />
       
        
      </Routes>
    </div>
  );
}

export default App;
