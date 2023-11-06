import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import ContactUs from "./pages/ContactUs";

import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/contactus" element={<ContactUs />}/>
          <Route path="*" element={<NoPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
