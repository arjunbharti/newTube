import "./styles/App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Videos from "./pages/Videos";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
