import { useState } from "react"
import { FormValidate } from "../../../../utils/Helpers/ValidateForm"

const ProfileDetails = ({ editProfile, update, user }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [errors, setErrors] = useState({})
    const updateProfile = () => {
        const err = FormValidate(user)
        setErrors(err);
        if (Object.keys(err).length === 0) update(setIsEdit)
    }

    return (
        <>
            {isEdit ?
                <div onClick={updateProfile} className='col-span-full cursor-pointer flex justify-end'>
                    <button type="button" className="font-semibold text-sm border rounded border-gray-100 px-2 py-[3] hover:bg-gray-100 hover:text-gray-900 transition duration-300  text-gray-100">Update</button>
                </div> :
                <h1 onClick={() => setIsEdit(true)} className='col-span-full cursor-pointer flex justify-end'> <span className='m-1 '><svg width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg></span> Edit</h1>}
            <div className="col-span-full sm:col-span-3">
                <label htmlFor="name" className="text-sm">Full Name</label>
                <input onChange={editProfile} id="name" name='username' autoComplete="off" type="text" placeholder='User name' defaultValue={user?.username} disabled={!isEdit} className={`w-full px-2 py-1 text-gray-900 rounded-md focus:ring focus:ring-opacity-75 ${errors.username ? 'focus:ring-red-400' : 'focus:ring-violet-400'} border-gray-700`} />
                {errors.username && (<p className="pt-1 text-red-500 text-xs italic"> {errors.username}</p>)}
            </div>
            <div className="col-span-full sm:col-span-3">
                <label htmlFor="mobile" className="text-sm">Mobile Number</label>
                <input onChange={editProfile} id="mobile" name='mobile' autoComplete="off" type="text" placeholder='Mobile number' defaultValue={user?.mobile} disabled={!isEdit} className={`w-full px-2 py-1 text-gray-900 rounded-md focus:ring focus:ring-opacity-75 ${errors.mobile ? 'focus:ring-red-400' : 'focus:ring-violet-400'} border-gray-700`} />
                {errors.mobile && (<p className="text-red-500 pt-1 text-xs italic"> {errors.mobile}</p>)}
            </div>
            <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">Email</label>
                <input onChange={editProfile} id="email" name='email' autoComplete="off" type="email" defaultValue={user?.email} disabled={!isEdit} placeholder="Email" className={`w-full px-2 py-1 rounded-md text-gray-900 focus:ring focus:ring-opacity-75 ${errors.email ? 'focus:ring-red-400' : 'focus:ring-violet-400'} border-gray-700`} />
                {errors.username && (<p className="text-red-500 pt-1 text-xs italic"> {errors.email}</p>)}
            </div></>)
}


export default ProfileDetails