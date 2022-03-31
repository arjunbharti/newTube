import "./styles/App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Videos from "./pages/Videos";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LikedVideos from "./pages/LikedVideos";
import WatchLater from './pages/WatchLater';
import Playlist from "./pages/Playlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/liked" element={<LikedVideos />} />
        <Route path="/saved" element={<WatchLater />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
