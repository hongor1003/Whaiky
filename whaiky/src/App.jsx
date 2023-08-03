import React, { useContext } from 'react';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import './style.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext.jsx';
import ChatInterface from './pages/ChatInterface';
import AddPost from './components/post/AddPost';
import Posts from './components/post/Posts';


function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="chat" element={<ProtectedRoute><ChatInterface /></ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="addpost" element={<AddPost />} />
          <Route path="posts" element={<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
