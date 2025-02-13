import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "../../components/shared/form/Form";
import { useSelector } from 'react-redux';
import Spinner from "../../components/shared/Spinner";

const Login = () => {
  const { loading } = useSelector(state => state.auth);
  return (
    <>
      {loading ? (<Spinner/> ):
       ( <Form specificType={"Register"} submitBtn={"Login"} formTitle={"Login into your account!"} formType={"login"} />)
    }
    </>
  );
};

export default Login;