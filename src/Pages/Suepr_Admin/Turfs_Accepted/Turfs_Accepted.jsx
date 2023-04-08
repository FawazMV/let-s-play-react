
import React, { useEffect, useState } from 'react';
import { ManageTurf, TurfsAccepted } from '../../../API/ServerRequests/Admin/AdminApi';
import { ConfirmSwal } from '../../../utils/Helpers/Swal';

const Turf_Management = ({ turfs, update }) => {
    const [selectedTurf, setSelectedTurf] = useState(null);
    const [showTooltip, setShowTooltip] = useState(false);
    const handleTurfClick = (turf) => {
        setSelectedTurf(turf);
    };
    const manageTurf = async (status, turf,) => {
        const text = `Do you want to ${status ? '' : 'un'}block the court ${turf.courtName}!`
        if (await ConfirmSwal(text)) {
            ManageTurf(turf._id, status, 1234).then(() => update("" + turf._id + status))
        }
    }

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden"> 
            <div className="px-6 py-4">
                <h2 className="font-bold text-2xl mb-4">Turf Management</h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Sl No</th>
                                <th className="px-4 py-2">Court Name</th>
                                <th className="px-4 py-2">Location</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Phone</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {turfs.map((turf, index) => (
                                <tr className='relative' key={turf._id} onMouseEnter={() => {
                                    handleTurfClick(turf)
                                    setShowTooltip(true)
                                }} onMouseLeave={() => setShowTooltip(false)}>
                                    <td className="border px-4 py-2">
                                        <div className="truncate">{index + 1}</div>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <div className="truncate">{turf.courtName}</div>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <div className="truncate">{turf.location}</div>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <div className="truncate">{turf.email}</div>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <div className="truncate">{turf.mobile}</div>
                                    </td>
                                    <td className="border px-4 py-2 flex justify-center items-center">
                                        <button onClick={() => manageTurf(!turf.block, turf)} className={`${turf.block ? "bg-red-500 hover:bg-red-700" : "bg-green-500 hover:bg-green-700"} text-white font-bold py-2 px-4 rounded mx-2 w-full sm:w-auto`}>
                                            {turf.block ? 'Unblock' : 'Block'}
                                        </button>
                                    </td>
                                    {showTooltip && selectedTurf && selectedTurf._id === turf._id && (
                                        <td className="absolute bg-white shadow-md py-4 z-10 px-8  left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                                            <h2 className="text-lg font-bold mb-2">{selectedTurf.courtName}</h2>
                                            <div className='flex justify-around'>
                                                <img src={selectedTurf.images[0].location} alt="Turf" className="mb-2 h-10" />
                                                <img src={selectedTurf.images[1]?.location} alt="Turf" className="mb-2 h-10" />
                                            </div>
                                            <p className='text-sm'>{selectedTurf.loction_Details}</p>
                                            <div className='flex justify-between text-[15px] font-semibold'>
                                                <p>{selectedTurf.distric}</p><p>{selectedTurf.state}</p>
                                            </div>

                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};




const Turfs_Accepted = () => {
    const [data, setData] = useState([])
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        getTurfs()
    }, [update])

    const getTurfs = () => {
        TurfsAccepted(123).then(data => setData(data))
            .catch(err => console.log(err))
    }
    return (
        <div className="container mx-auto  pt-28 pb-8">
            <Turf_Management update={setUpdate} turfs={data} />
        </div>
    );
};

export default Turfs_Accepted;
