import React from 'react'
import Form from "../../components/shared/form/Form";
import { useSelector } from 'react-redux';
import Spinner from '../../components/shared/Spinner';

const Register = () => {
  const {loading} = useSelector(state=>state.auth);
  return (
    <>
    {loading ? (<Spinner/>) :
      (<Form specificType={"login"}  submitBtn={"Register"} formTitle={"Register Here!"} formType={"register"} />)
    }
    </>
  )
}

export default Register;