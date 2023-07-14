import { Routes, Route } from 'react-router-dom';
import NotMatch from '../routes/NotMatch.js';
import Layout from './Layout.js';
import Home from '../routes/Home.js';
import About from '../routes/About.js';
import Login from '../routes/Login.js';
import Profile from '../routes/Profile.js';
import SinglePage from '../routes/SinglePage.js';
import ProtectedRoute from './ProtectedRoute.js';

const TodoApp = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />}>
        <Route path=":slug" element={<SinglePage />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="*" element={<NotMatch />} />
    </Route>
  </Routes>
);
export default TodoApp;
