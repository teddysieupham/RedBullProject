import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import  PackageList  from './page/PackageList/PackageList';
import Footer from './page/Footer/Footer';
import Navbar from './page/Navbar/Navbar';
import AboutUS from './page/AboutUsPage/AboutUs.jsx';
import Profile from './page/Profile-FrontEnd/Profile';
import Profile2 from './page/Profile-FrontEnd/Profile2';
import  PackageDetail  from './page/PackageDetail/PackageDetail';
import NotFound from './page/NotFound/NotFound';
import {BrowserRouter,Routes,Route,Navigate,Outlet } from 'react-router-dom';
import {HomePage} from './page/HomePage/HomePage';
import Login from './page/Login/Login';

const ProtectedRoute = ({
  redirectPath = '/login',
  children,
}) => {
  if (!localStorage.getItem("user")) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};
const ProtectedLogin= ({
  redirectPath = '/home',
  children,
}) => {
  if (localStorage.getItem("user")) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Login/>;
};

const Application = () => {
  
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      {/* PUBLIC ROUTES IN HERE */}
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<HomePage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="login" element={<ProtectedLogin />} />
      <Route path="aboutus" element={<AboutUS />} />
      
      <Route element={<ProtectedRoute/>}>
        {/* PROTECTED ROUTES IN HERE */}
        <Route path="packagelist" element={<PackageList />} />
        <Route path="profile" element={<Profile2 />} />
        <Route path="package/:id" element={<PackageDetail />} />
      </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Application/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
