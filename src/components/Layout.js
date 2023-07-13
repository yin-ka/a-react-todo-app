import Navbar from '../components/Navbar.js';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Layout;