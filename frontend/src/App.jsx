import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import SignupLoginForm from "./components/Login&Signup";
import Menu from "./Pages/Menu";
import ViewCart from "./Pages/ViewCart";
import Dashboard from "./Pages/Dashboard";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignupLoginForm/>}/>
        <Route path="/menu" element={<Menu />} />
        <Route path="/viewcart" element= {<ViewCart />} />
        <Route path="/profile" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
