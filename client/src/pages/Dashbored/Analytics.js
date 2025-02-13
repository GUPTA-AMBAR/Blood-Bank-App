import React, { useState, useEffect } from 'react';
import Header from '../../components/shared/Layout/Header';
import API from '../../services/API';
import BarChart from './BarChart';
import moment from "moment";

const Analytics = () => {
    const [data, setData] = useState([]);

    const getBloodGroupData = async () => {
        try {
            const { data } = await API.get("/analytics/bloodGroups-data");
            if (data?.success) {
                setData(data?.bloodGroupData);
            }
            // console.log(data);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getBloodGroupData();
    }, []);

    // get recent blood records
    const [recentData, setRecentData] = useState([]);

    const getBloodRecords = async () => {
        try {
            const { data } = await API.get("/inventory/get-recent-inventory");
            if (data?.success) {
                setRecentData(data?.inventory);
            }
            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBloodRecords();
    }, []);

    return (
        <>
            <Header />
            <div className="analytics-container" style={{ marginTop: "90px" }}>
                <h2 className="text-3xl font-bold text-center mb-4 twinkle">
                    Blood Group Distribution
                </h2>
                <div className="chart-wrapper">
                    {data.length > 0 ? (
                        <BarChart
                            labels={data.map(record => record.bloodGroup)}
                            label={"Available-Blood"}
                            bloodGroups={data.map(record => record.availableBlood)}
                        />
                    ) : (
                        <p className="text-center">Loading data or no data available.</p>
                    )}
                </div>
                {/* table content of barchart */}
                <h2 className="text-3xl font-bold text-center mb-4 twinkle">
                    Blood Group Data
                </h2>
                <div className="container mx-auto p-4 w-full max-height max-width overflow: scroll" style={{ overflowX: "auto" }}>
                    <div className="w-full rounded-lg shadow-lg">
                        <div className="overflow-x-auto max-w-full md:overflow-visible">  {/* Enable horizontal scrolling only on small screens */}
                            <table className="w-full border-collapse border border-gray-300 min-w-[600px]" style={{ width: "100%" }}>
                                <thead className='bg-info px-7'>
                                    <tr className="bg-gray-900 w-full">
                                        <th className="border border-gray-300 px-4 py-2">Blood Group</th>
                                        <th className="border border-gray-300 px-4 py-2">Available Blood</th>
                                        <th className="border border-gray-300 px-4 py-2">Total-In</th>
                                        <th className="border border-gray-300 px-4 py-2">Total-Out</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((record) => (
                                        <tr key={record._id} className="border border-gray-800">
                                            <td className="border border-gray-300 px-4 py-2">{record?.bloodGroup}</td>
                                            <td className="border border-gray-300 px-4 py-2">{record?.availableBlood}</td>
                                            <td className="border border-gray-300 px-4 py-2">{record?.totalIn}</td>
                                            <td className="border border-gray-300 px-4 py-2">{record?.totalOut}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* recent blood records */}
                <h2 className="text-3xl font-bold text-center mb-4 twinkle">
                    Recent Blood Records
                </h2>
                <div className="container mx-auto p-4 w-full max-height max-width overflow: scroll" style={{ overflowX: "auto" }}>
                    <div className="w-full rounded-lg shadow-lg">
                        <div className="overflow-x-auto max-w-full md:overflow-visible">  {/* Enable horizontal scrolling only on small screens */}
                            <table className="w-full border-collapse border border-gray-300 min-w-[600px]" style={{ width: "100%" }}>
                                <thead className='bg-info px-7'>
                                    <tr className="bg-gray-900 w-full">
                                        <th className="border border-gray-300 px-4 py-2">Blood Group</th>
                                        <th className="border border-gray-300 px-4 py-2">Inventory Type</th>
                                        <th className="border border-gray-300 px-4 py-2">Quantity</th>
                                        <th className="border border-gray-300 px-4 py-2">Donar Email</th>
                                        <th className="border border-gray-300 px-4 py-2">Time & Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentData?.map((record) => (
                                        <tr key={record._id} className="border border-gray-800">
                                            <td className="border border-gray-300 px-4 py-2">{record?.bloodGroup}</td>
                                            <td className="border border-gray-300 px-4 py-2">{record?.inventoryType}</td>
                                            <td className="border border-gray-300 px-4 py-2">{record?.quantity}</td>
                                            <td className="border border-gray-300 px-4 py-2">{record?.email}</td>
                                            <td className="border border-gray-300 px-4 py-2">{moment(record?.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Analytics;
