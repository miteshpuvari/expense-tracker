import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import OtpScreen from "../pages/otp-screen/otpScreen";
import AddExpense from "../pages/add-expense/AddExpense";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="" element={<ProtectedRoute/>}>
          <Route path="home" element={<Home />} />
          <Route path="otp_screen" element={<OtpScreen />} />
          <Route path="add_expense" element={<AddExpense />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
