import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Layout/Header";
import Courses from "./components/Courses";
import Footer from "./components/Layout/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgetPassword from "./components/auth/ForgetPassword";
import ResetPassword from "./components/auth/ResetPassword";
import Contact from "./components/Contact";
import Request from "./components/Request";
import About from "./components/About";
import Subscribe from "./components/payments/Subscribe";
import PaymentSuccess from "./components/payments/PaymentSuccess";
import PaymentFailed from "./components/payments/PaymentFailed";
import NotFound from "./components/Layout/NotFound";
import CoursePage from "./components/CoursePage";
import Profile from "./components/Profile";
import ChangePassword from "./components/ChangePassword";
import UpdateProfile from "./components/UpdateProfile";
import Dashboard from "./components/Admin/Dashboard";
import CreateCourse from "./components/Admin/CreateCourse";
import AdminCourses from "./components/Admin/AdminCourses";
import Users from "./components/Admin/Users";

const App = () => {
  window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<About />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/paymentSuccess" element={<PaymentSuccess />} />
        <Route path="/paymentFailed" element={<PaymentFailed />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/createcourse" element={<CreateCourse />} />
        <Route path="/admin/courses" element={<AdminCourses />} />
        <Route path="/admin/users" element={<Users />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
