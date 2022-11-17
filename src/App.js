import Navbar from './components/Navbar';
import './App.css';
import Post from './pages/Post';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/login" element={<Login />} />
          {/* <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
