import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getTurfGraphData } from "../../../../API/ServerRequests/Turf/TurfsApi"
import LineGraph from "../../../Components/LineGraph"

const TurfGraph = () => {
    const token = useSelector((store) => store.turfAuth.token)
    const [data, setData] = useState([])
    useEffect(() => {
        token && getGraphData()
    }, [token])

    const getGraphData = async () => {
        const response = await getTurfGraphData(token)
        if (response?.status === 200) setData(response?.data?.monthlyReport)
    }

    return <LineGraph data={data} />
}

export default TurfGraph