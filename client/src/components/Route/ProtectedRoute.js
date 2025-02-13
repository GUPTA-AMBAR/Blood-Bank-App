import React, {  useEffect } from 'react'
import { useDispatch } from "react-redux";
import API from '../../services/API';
import { Navigate } from 'react-router-dom';
import { getUser } from '../../redux/features/auth/authAction';


const ProtectedRoute = ({ children }) => {
    const dispatch = useDispatch();
    const getCurrentUser = async () => {
        try {
            const { data } = await API.get("auth/current-user");
            if (data?.success) {
                dispatch(getUser(data));
            }
        } catch (error) {
            localStorage.clear();
            console.log(error);
        }
    }
    useEffect(() => {
        getCurrentUser();
        // eslint-disable-next-line
    })
    if (localStorage.getItem("token")) {
        return children;
    }
    else {
        return <Navigate to="/front-page" />
    }
}

export default ProtectedRoute;