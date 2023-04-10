import { confirmPaymentRequest, getPaymentRequests } from "../../../API/ServerRequests/Admin/AdminApi"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { successSwal } from "../../../utils/Helpers/Swal"

const PaymentRequests = () => {

    const [data, setData] = useState([])
    const [update, setUpdate] = useState(false)
    const token = useSelector(store => store.adminAuth.token)
    useEffect(() => {
        token && getDatas()
    }, [token, update])

    const getDatas = async () => {
        const response = await getPaymentRequests(token)
        if (response?.status === 200) setData(response.data)
    }
    const confirm = async (id) => {
        const response = await confirmPaymentRequest(token, id)
        if (response.status === 200) {
            successSwal('Confirmation updated successfully')
            setUpdate(!update)
        }
    }

    return (
        <div className="bg-slate-800 min-h-screen  md:px-10 lg:px-24 pt-20">
            <h1 className="text-white text-3xl font-bold p-5">Payment Requests</h1>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-400">
                    <thead className="text-xs uppercase text-gray-400">
                        <tr className=" border-b border-gray-70">
                            <th scope="col" className="px-6 pl-7 py-3 bg-gray-800">
                                Court Name
                            </th>
                            <th scope="col" className="px-6 pl-16 py-3">
                                Mobile No
                            </th>
                            <th scope="col" className="px-6 pl-[51px] py-3 bg-gray-800">
                                Amount
                            </th>
                            <th scope="col" className="px-6 pl-16 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((req, index) => (
                            <tr key={index} className="border-b border-gray-700">

                                <th scope="row" className="px-6 py-4 bg-gray-800">
                                    {req?.turf[0]?.courtName}
                                </th>
                                <td className="px-16 py-4">
                                    {req?.turf[0]?.mobile}
                                </td>
                                <td className="px-14 py-4 bg-gray-800">
                                    ₹ {req?.amount}
                                </td>
                                <td className="px-12 py-4">
                                    <button onClick={() => confirm(req._id)} className="p-2 text-gray-50 rounded-md hover:opacity-80 transition bg-green-500"> Confirm</button>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>




        </div>
    )
}



export default PaymentRequests