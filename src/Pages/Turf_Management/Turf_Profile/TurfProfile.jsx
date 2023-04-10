import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { getTurfProfile, updateTurfDetails } from "../../../API/ServerRequests/Turf/TurfsApi";
import { FormValidate } from "../../../utils/Helpers/ValidateForm";
import { errorSwal, successSwal } from "../../../utils/Helpers/Swal";
import { turfProfileInitial } from "../../../utils/Helpers/Constats";
import DefaultDetails from "./Components/DefaultDetails";
import { FormDetails } from "./Components/FormDetails";
import EditButton from "./Components/EditButton";

const TurfPorfile = () => {
    const [details, setDetails] = useState(turfProfileInitial)
    const [isEdit, setIsEdit] = useState(false);
    const [errors, setErrors] = useState({});

    const token = useSelector((store) => store.turfAuth.token);
    useEffect(() => {
        token && getTurfDetails()
    }, [token])
    const getTurfDetails = async () => {
        const response = await getTurfProfile(token)
        if (response?.status === 200) {
            setDetails(response?.data)
        } else errorSwal(response?.data?.error)
    }



    const handleUpdate = async () => {
        const err = FormValidate(details)
        setErrors(err)
        if (Object.keys(err).length) return
        const response = await updateTurfDetails(details, token)
        if (response?.status === 200) {
            successSwal(response?.data?.message)
            setIsEdit(false)
        } else errorSwal(response?.data?.error)
    };

    return (
        <div className="bg-slate-800 text-gray-800">
            <div className="container  mx-auto pt-28  p-4">
                <div className="mb-4 flex justify-center items-center">
                    <h1 className="text-4xl text-gray-200 font-semibold">{details?.courtName}</h1>
                </div>
                <DefaultDetails {...details} />
                <div className="mt-4">
                    <h2 className="text-lg font-semibold mb-2">Additional Details</h2>
                    <div className="bg-white p-4 rounded shadow">
                        <FormDetails errors={errors} isEdit={isEdit} details={details} setDetails={setDetails} />
                        <EditButton isEdit={isEdit} setIsEdit={setIsEdit} handleUpdate={handleUpdate} />
                    </div>
                </div>
            </div >
        </div>
    );



}

export default TurfPorfile






