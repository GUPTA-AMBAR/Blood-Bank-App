import React, { useState, useEffect } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import API from '../../services/API'
import moment from "moment";
import toast from 'react-hot-toast';

const HospitalList = () => {
  const [data, setData] = useState([]);
  const getHospitals = async () => {
    try {
      const { data } = await API.get("/admin/hospital-list");
      console.log(data);
      if (data?.success) {
        setData(data?.hospitalData);
      }

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getHospitals();
  }, [])

  const deleteUser = async (id) => {
    try {
      const { data } = await API.delete(`/admin/delete-user/${id}`);
      const confirmDelete = window.confirm(`Are you sure you want to delete this hospital?`);
      if (!confirmDelete) return;
      // console.log(data);
      if (data?.success) {
        toast.success(` Hospital deleted successfully`);
        window.location.reload();
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <div className="container mx-auto p-4 w-full max-height max-width overflow: scroll" style={{ overflowX: "auto" }}>
        <div className="w-full rounded-lg shadow-lg">
          <div className="overflow-x-auto max-w-full md:overflow-visible">
            <table className="w-full border-collapse border border-gray-300 min-w-[600px]" style={{ width: "100%" }}>
              <thead className='bg-info px-7'>
                <tr className="bg-gray-900 w-full">
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  <th className="border border-gray-300 px-4 py-2">Phone</th>
                  <th className="border border-gray-300 px-4 py-2">Time & Date</th>
                  <th className="border border-gray-300 px-4 py-2">Delete</th>

                </tr>
              </thead>
              <tbody>
                {data?.map((record) => (
                  <tr key={record._id} className="border border-gray-800">
                    <td className="border border-gray-300 px-4 py-2">{record?.hospitalName}</td>
                    <td className="border border-gray-300 px-4 py-2">{record?.email}</td>
                    <td className="border border-gray-300 px-4 py-2">{record?.phone}</td>
                    <td className="border border-gray-300 px-4 py-2">{moment(record?.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                    <button type="button" className=" btn btn-danger bg-red-600 text-white px-2 py-1 text-sm rounded hover:bg-red-400" style={{ marginLeft: "10px", marginTop: "5px" }} onClick={() => deleteUser(record?._id)}>
                      Delete
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HospitalList;