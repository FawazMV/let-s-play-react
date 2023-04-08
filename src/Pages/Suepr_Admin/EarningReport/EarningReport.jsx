import { getTurfsReport } from "../../../API/ServerRequests/Admin/AdminApi"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const EarningReport = () => {

    const [report, setReport] = useState([])
    // const token = useSelector(store => store.adminAuth.token)
    useEffect(() => {
        getReport()
    }, [])

    const getReport = async () => {
        const response = await getTurfsReport('token')
        if (response?.status === 200) setReport(response.data)

        else console.log(response)
        console.log(response.data)
    }

    return (
        <div className="bg-slate-800 min-h-screen  md:px-10 lg:px-24 pt-20">
            <h1 className="text-white text-3xl font-bold p-5">Earning Reports</h1>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-400">
                    <thead className="text-xs uppercase text-gray-400">
                        <tr className=" border-b border-gray-70">
                            <th scope="col" className="px-6 pl-10 py-3 bg-gray-800">
                                Court Name
                            </th>
                            <th scope="col" className="px-6 pl-10 py-3">
                                Total Bookings
                            </th>
                            <th scope="col" className="px-6 pl-10 py-3 bg-gray-800">
                                Total Amount
                            </th>
                            <th scope="col" className="px-6 pl-10 py-3">
                                Profit
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {report.map(report => (
                            <tr key={report._id} className="border-b border-gray-700">

                                <th scope="row" className="px-6 py-4 bg-gray-800">
                                    {report?.name}
                                </th>
                                <td className="px-16 py-4">
                                    {report.count}
                                </td>
                                <td className="px-14 py-4 bg-gray-800">
                                    ₹ {report.totalPrice} 
                                </td>
                                <td className="px-12 py-4">
                                    ₹ {report.totalPrice * 3 / 100} 
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>




        </div>
    )
}



export default EarningReport