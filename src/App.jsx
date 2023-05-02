import { BrowserRouter as Router, Routes, Route }from "react-router-dom";

import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";
import Home from "./components/pages/Home";

function App() {  
  return (
    <Router>
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home/>} />
        </Routes>
    </Router>
  );
}

export default App;
