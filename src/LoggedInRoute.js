import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "./pages/AuthService";
                                            //残余引数
const LoggerInRoute = ( { element: Element, ...rest } ) => {
    const user = useContext(AuthContext)
    
    return user ? <Outlet /> : <Navigate replace to='/login' />
}

export default LoggerInRoute