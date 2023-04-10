import { dashboardGraphDetails } from "../../../../API/ServerRequests/Admin/AdminApi";
import LineGraph from '../../../Components/LineGraph'
import BarGraph from '../../../Components/BarGraph'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Graphs = () => {
    const [turfGraphData, setTurfGraphData] = useState([]);
    const [monthlyGraphData, setMonthlyGraphData] = useState([]);
    const token = useSelector(store => store.adminAuth.token)
    useEffect(() => {
        token && fetchDatas();
    }, [token]);
    const fetchDatas = async () => {
        const response = await dashboardGraphDetails(token);
        if (response?.status === 200) {
            setTurfGraphData(response?.data?.turfWiseReport);
            setMonthlyGraphData(response?.data?.monthlyReport)
        }
    };
    return (
        <div className="md:px-16 xl:px-20 lg:flex justify-between">
            <BarGraph data={turfGraphData} />
            <LineGraph data={monthlyGraphData} />
        </div>
    )
}

export default Graphs