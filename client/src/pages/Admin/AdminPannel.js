import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminPannel = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <Layout>
            <div className="container mt-4">
                <div className="card mb-3 mx-auto" style={{ maxWidth: "1000px" }}>
                    <img
                        src="./assests/images/bloodBank.jpg"
                        className="card-img-top"
                        alt="admin-pannel"
                        style={{ height: "300px", objectFit: "cover" }}
                    />
                    <div className="card-body text-center">
                        <h3 className="card-title">
                            <b>Welcome {user?.name}</b>
                        </h3>
                        
                        <p className="card-text">
                            As an administrator of the Blood Bank App, you have complete control
                            over managing blood donations, requests, donors, and inventory. Your
                            role ensures the smooth operation of the system, helping to save
                            lives by efficiently managing blood supply.
                        </p>
                    </div>
                    <hr></hr>
                    <div className="card-body ">
                        <h3 className="card-title text-center">
                            <b>Admin Responsibilities:</b>
                        </h3>
                        <p className="card-text"><b>✔ Manage Blood Inventory: </b>Add, update, or remove blood stock based on availability.</p>
                        <p className="card-text"><b>✔ Donor Management:</b> Approve or reject donor registrations and maintain donor records.</p>
                        <p className="card-text"><b>✔ Blood Requests:</b> Review and process blood requests from hospitals or individuals.</p>
                        <p className="card-text"><b>✔ User Management:</b> Oversee user registrations, verify information, and handle any issues.</p>
                        <p className="card-text"><b>✔ Reports & Analytics:</b> Monitor blood stock levels, donor activities, and request statistics.</p>
                        <p className="card-text"><b>✔ Notifications & Alerts:</b> Send important updates to users regarding blood availability and urgent requests.</p>
                    </div>
                    <hr></hr>
                    <div className="card-body ">
                        <h3 className="card-title text-center">
                            <b>System Features for Admins:</b>
                        </h3>
                        <p className="card-text"><b>📌 Dashboard Overview –</b>A quick summary of available blood units, pending requests, and donor registrations.</p>
                        <p className="card-text"><b>📌 Inventory Control –</b>Maintain an accurate record of blood stock to prevent shortages.</p>
                        <p className="card-text"><b>📌 User & Donor Verification –</b>Ensure the credibility of donors and recipients through authentication.</p>
                        <p className="card-text"><b>📌 Emergency Alerts –</b>Notify users when there’s a critical blood shortage.</p>
                        <p className="card-text"><b>📌 Donation & Request History – </b>Track past blood donations and requests for transparency.</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AdminPannel;
