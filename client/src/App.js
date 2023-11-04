import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
