import { useState } from "react"
//import Navbar from "./components/Navbar"
//import NewsBoard from "./components/NewsBoard"
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import NewsBoard from "./components/NewsBoard";

const App = () => {
  const [category,setCategory] = useState("general");
  return (
    <Router>
    <div className="App">
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/newsboard" element={<NewsBoard/>}/>
    </Routes>
    </div>
    </Router>
   
  )
}

export default App
