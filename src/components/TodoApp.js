import { Routes, Route } from 'react-router-dom';
import NotMatch from '../routes/NotMatch.js';
import Layout from '../components/Layout.js';
import Home from '../routes/Home.js';
import About from '../routes/About.js';
import Login from '../routes/Login.js';
import Profile from '../routes/Profile.js';

const TodoApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
};
export default TodoApp;
