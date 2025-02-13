import React, { useState } from 'react';
import InputForm from './InputForm';
import { Link } from 'react-router-dom';
import { handleLogin,handleRegister } from '../../../services/authService';

const Form = ({ formTitle, submitBtn, formType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('donar');
  const [name, setName] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [organisationName, setOrganisationName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [website, setWebsite] = useState('');

  return (
    <div>
      <form onSubmit={(e)=>{
        if(formType === "login") return handleLogin(e,email,password,role);
        else if(formType === "register") return handleRegister(e,email,password,role,name,hospitalName,organisationName,phone,address,website);
      }} >
        <section
          className="h-100 bg-info"
          style={{
            backgroundImage: "url('./assests/images/redBlood.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh"
          }}
        >
          <div className="container py-2 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card card-registration my-5">
                  <div className="row g-0">
                    <div className="col-xl-6 d-none d-xl-block">
                      <img
                        src="./assests/images/danar1.webp"
                        alt="Sample"
                        className="img-fluid "
                        style={{ borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem", height: "100%" }}
                      />
                    </div>
                    <div className="col-xl-6">

                      <span className="d-flex justify-content-center " style={{ marginTop: "5px" }}>
                        <img src="./assests/images/logo.webp" style={{ height: "48px", width: "70px" }} />
                      </span>

                      <div className="card-body p-md-2 text-black">
                        <span ><h3 className="mb-3 text-uppercase d-flex justify-content-center">{formTitle}</h3></span>
                        <hr />

                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                          <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-check-input" type="radio" name="role" id="donarRadio" value={"donar"} onChange={(e) => setRole(e.target.value)} defaultChecked />
                            <label className="form-check-label" htmlFor="forDonar">Donar</label>
                          </div>
                          <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-check-input" type="radio" name="role" id="adminRadio" value={"admin"} onChange={(e) => setRole(e.target.value)} />
                            <label className="form-check-label" htmlFor="forAdmin">Admin</label>
                          </div>
                          <div className="form-check form-check-inline mb-0">
                            <input className="form-check-input" type="radio" name="role" id="hospitalRadio" value={"hospital"} onChange={(e) => setRole(e.target.value)} />
                            <label className="form-check-label" htmlFor="forHospital">Hospital</label>
                          </div>
                          <div className="form-check form-check-inline mb-0">
                            <input className="form-check-input" type="radio" name="role" id="organisationRadio" value={"organisation"} onChange={(e) => setRole(e.target.value)} />
                            <label className="form-check-label" htmlFor="forOrganisation">Organisation</label>
                          </div>
                        </div>

                        {/* SWITCH-STATEMENT */}

                        {(() => {
                          switch (true) {
                            case formType === "login": {
                              return (
                                <>
                                  <div className="row-2">
                                    <InputForm labelText="Email" labelFor="forEmail" inputType="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <InputForm labelText="Password" labelFor="forPassword" inputType="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                  </div>
                                </>
                              )
                            }
                          }
                        })()}

                        {(() => {
                          switch (true) {
                            case formType === "register": {
                              return (
                                <>
                                  <div className="row">
                                    <InputForm labelText="Email" labelFor="forEmail" inputType="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <InputForm labelText="Password" labelFor="forPassword" inputType="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                                    {(role === "donar" || role === "admin") && (
                                      <InputForm labelText="Name" labelFor="forName" inputType="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                                    )}

                                    {(role === "hospital") && (
                                      <InputForm labelText="Hospital Name" labelFor="forHospitalName" inputType="text" name="hospitalName" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} />
                                    )}

                                    {(role === "organisation") && (
                                      <InputForm labelText="Organisation Name" labelFor="forOrganisationName" inputType="text" name="organisationName" value={organisationName} onChange={(e) => setOrganisationName(e.target.value)} />
                                    )}

                                    <InputForm labelText="Phone" labelFor="forPhone" inputType="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    <InputForm labelText="Address" labelFor="forAddress" inputType="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                    <InputForm labelText="Website" labelFor="forWebsite" inputType="url" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} />
                                  </div>
                                </>
                              )
                            }
                          }
                        })()}

                        {formType === "login" ? (
                          <p style={{ color: "#393f81" }}>
                            Don't have an account? <Link to={'/register'} style={{ color: "#393f81" }}>Register here</Link>? <Link to={'/front-page'} style={{ color: "#393f81" }}>Home</Link>
                          </p>
                        ) :
                          <p style={{ color: "#393f81" }}>
                            Already have an account? <Link to={'/login'} style={{ color: "#393f81" }}>Login here</Link>? <Link to={'/front-page'} style={{ color: "#393f81" }}>Home</Link>
                          </p>
                        }
                        <div className="d-flex justify-content-center">
                          <button type="submit" className="btn btn-warning btn-lg ms-2">{submitBtn}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >
      </form>
    </div>
  );
};

export default Form;

