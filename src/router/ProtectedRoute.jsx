import React from "react";
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {

    const verify = localStorage.getItem('isLogin');

    return verify === "true" ? <Outlet/>: <Navigate to="/" />

}

export default ProtectedRoute;