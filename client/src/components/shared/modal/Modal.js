import React, { useState } from 'react'
import API from '../../../services/API';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const Modal = ({ show, onClose }) => {
    const [inventoryType, setInventoryType] = useState();
    const [bloodGroup, setBloodGroup] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [email, setEmail] = useState("");
    const { user } = useSelector((state) => state.auth);

    // const handleSumbitData = async() => { 
    //     try {
    //         if(!quantity ||!bloodGroup){
    //             return toast.error("please provide all fields");
    //         }
    //        const {data} =await API.post("/inventory/create-inventory",{
    //         donarEmail,
    //         email : user?.email ,
    //         organisation : user?._id,
    //         inventoryType,
    //         bloodGroup,
    //         quantity,
    //        }); 
    //        if(data?.success){
    //         console.log("createInventory data : ",data);

    //         toast.success("New Record created");
    //         window.location.reload();
    //        }
    //     } catch (error) {
    //         toast.error("error while dealing with inventory!");
    //         console.log("Error: " + error);
    //         // window.location.reload();
    //     }
    // }

    const handleSumbitData = async () => {
        try {
            if (!inventoryType || !bloodGroup || !quantity) {
                return toast.error("Please provide all required fields");
            }

            const requestData = {
                // email: user?.email,
                email,
                organisation: user?._id,
                inventoryType,
                bloodGroup,
                quantity
            };

            if (inventoryType === "in") {
                requestData.email = email;
            }
            if (inventoryType === "out") {
                requestData.email = email;
            }

            const { data } = await API.post("/inventory/create-inventory", requestData);

            if (data?.success) {
                toast.success("New Record created successfully!");
                window.location.reload();
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
            // console.log("Error: " + error.response?.data?.message || error.message);
            window.location.reload();
        }
    };


    return (
        <div className={`modal ${show ? 'show d-block' : ''}`} tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Manage Blood Record</h5>
                        <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex align-items-center mb-4 py-2">
                            <label className="me-3">Blood-Type:</label>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inventoryType"
                                    id="in"
                                    value="in"
                                    onChange={(e) => setInventoryType(e.target.value)}

                                />
                                <label className="form-check-label" htmlFor="in">In</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inventoryType"
                                    id="out"
                                    value="out"
                                    onChange={(e) => setInventoryType(e.target.value)}
                                />
                                <label className="form-check-label" htmlFor="out">Out</label>
                            </div>
                        </div>

                        {/* options section */}
                        <select className="form-select" aria-label="Default select example" onChange={(e) => setBloodGroup(e.target.value)}>
                            <option selected>Select the blood group</option>
                            <option value={"O+"}>O+</option>
                            <option value={"O-"}>O-</option>
                            <option value={"AB+"}>AB+</option>
                            <option value={"AB-"}>AB-</option>
                            <option value={"A+"}>A+</option>
                            <option value={"A-"}>A-</option>
                            <option value={"B+"}>B+</option>
                            <option value={"B-"}>B-</option>
                        </select>

                        <div className="mb-3 mt-3">
                            {inventoryType === "in" ? (
                                <>
                                    <label htmlFor="donarEmail" className="form-label">Donor Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="donarEmail"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </>
                            ) : (
                                <>
                                    <label htmlFor="hospitalEmail" className="form-label">Hospital Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="hospitalEmail"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="quantity" className="form-label">Quantity (ml)</label>
                            <input type="Number" className="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleSumbitData}>Submit</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Modal;



