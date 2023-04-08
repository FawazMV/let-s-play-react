import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserBookings, getUserDetails, updateProfile } from '../../../API/ServerRequests/User/UserApi';
import { errorSwal, successSwal } from '../../../utils/Helpers/Swal.js';
import ProfilePicture from './Components/ProfilePicture';
import ProfileDetails from './Components/ProfileDetails';
import PasswordUpdate from './Components/PasswordUpdate';
import LogoutButton from './Components/LogoutButton';
import BookingDetails from './Components/BookingDetails.JSX';

const UserProfile = () => {
    const [user, setUser] = useState({})
    const token = useSelector((store) => store.auth.token);
    useEffect(() => {
        token && getProfile()
    }, [token])
    const getProfile = async () => {
        const result = await getUserDetails(token)
        if (result?.status === 200) {
            const { email, mobile, username } = result.data
            setUser({ email, mobile, username })
        } else if (result?.status === 500) errorSwal(result.data.error)

    }
    const editProfile = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }
    const update = async (setIsEdit) => {
        const response = await updateProfile(user, token)
        if (response.status === 200) {
            successSwal(response.data.message)
            setIsEdit(false)
        } else if (response.status === 500) errorSwal(response.data.error)
    }


    return (
        <div className='pt-16 xs:pt-20  lg:pt-20 min-h-screen bg-gray-800'>
            <section className="mx-auto sm:p-4 container flex flex-col md:p-10 bg-gray-800 text-gray-50">
                <fieldset className="grid grid-cols-4 gap-6 p-14 rounded-md shadow-sm bg-gray-900">
                    <ProfilePicture user={user} />
                    <div className="space-y-2 col-span-full opacity-30 lg:hidden border-b-[1px] my-4" />
                    <div className="grid grid-cols-6 gap-6 col-span-full lg:col-span-3">
                        <ProfileDetails editProfile={editProfile} update={update} user={user} />
                        <div className="col-span-full "> <hr className='mt-5 opacity-30 ' /></div>
                        <PasswordUpdate />
                        <LogoutButton />
                    </div>
                </fieldset>
            </section>
            <BookingDetails token={token} />
        </div>
    )
};

export default UserProfile;


