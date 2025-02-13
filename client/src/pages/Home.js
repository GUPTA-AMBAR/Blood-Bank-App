import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../components/shared/Spinner';
import Layout from '../components/shared/Layout/Layout';
import { FaPlus } from "react-icons/fa";
import Modal from '../components/shared/modal/Modal';
import API from '../services/API';
import moment from "moment";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { loading ,user} = useSelector(state => state.auth);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-inventory");
      if (data?.success) {
        setData(data?.inventory);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);

  useEffect(() => {
    if (user?.role === "hospital" || user?.role === "donar") {
      navigate("/organisation");
    }
    else if(user?.role ==="admin"){
      navigate("/admin-pannel")
    }
    else{
      navigate("/")
    }
  }, [user, navigate]);

  return (
    <Layout>

      {loading ? (<Spinner />) : (
        <>
          <div className="d-grid gap-1 col-4 mt-4 mx-auto">
            <button
              className="btn btn-primary"
              type="button"
              style={{ cursor: "pointer" }}
              onClick={() => setShowModal(true)}
            >
              <h4><FaPlus /> Add Inventory</h4>
            </button>
          </div>

          {/* Full Width Responsive Table */}
          <div className="container mx-auto p-4 w-full max-height max-width overflow: scroll" style={{ overflowX: "auto" }}>
            <div className="w-full rounded-lg shadow-lg">
              <div className="overflow-x-auto max-w-full md:overflow-visible">  {/* Enable horizontal scrolling only on small screens */}
                <table className="w-full border-collapse border border-gray-300 min-w-[600px]" style={{width:"100%"}}>
                  <thead className='bg-info px-7'>
                    <tr className="bg-gray-900 w-full">
                      <th className="border border-gray-300 px-4 py-2">Blood Group</th>
                      <th className="border border-gray-300 px-4 py-2">Inventory</th>
                      <th className="border border-gray-300 px-4 py-2">Quantity</th>
                      <th className="border border-gray-300 px-4 py-2">Email</th>
                      <th className="border border-gray-300 px-4 py-2">Time & Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((record) => (
                      <tr key={record._id} className="border border-gray-800">
                        <td className="border border-gray-300 px-4 py-2">{record.bloodGroup}</td>
                        <td className="border border-gray-300 px-4 py-2">{record?.inventoryType}</td>
                        <td className="border border-gray-300 px-4 py-2">{record?.quantity}</td>
                        {record?.inventoryType === "in" ? (
                          <td className="border border-gray-300 px-4 py-2">{record?.email}</td>
                        ):(
                          <td className="border border-gray-300 px-4 py-2">{record?.email}</td>
                        )
                        }
                        <td className="border border-gray-300 px-4 py-2">{moment(record?.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div> 

          <Modal show={showModal} onClose={() => setShowModal(false)} />
        </>
      )}
    </Layout>
  );
};

export default Home;
