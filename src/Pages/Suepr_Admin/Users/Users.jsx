import React, { useEffect, useState } from 'react';
import avatar from '../../../assets/avatar.png'


const UserList = ({ users }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 xl:px-32 py-4">
                <h2 className="font-bold text-2xl mb-4">User List</h2>
                <ul>
                    {users.map(user => (
                        <li key={user._id} className="">
                            <div className="flex border-t-2 p-3 hover:bg-slate-300 items-center">
                                <img src={user.profile ? user.profile.location : avatar} alt={user.name} className="lg:w-10 w-12 h-12 lg:h-10 rounded-full mr-4" />
                                <div className="md:flex justify-between w-full text-sm">
                                    <h3 className="font-semibold">{user.name}</h3>
                                    <p className="text-gray-600">{user.email}</p>
                                    <p className="text-gray-700">{user.mobile}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


import React from 'react';
import { getUsers } from '../../../API/ServerRequests/Admin/AdminApi';


const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => allusers(), [])
    const allusers = () => {
        getUsers().then(users => setUsers(users))
            .catch(err => console.log(err))
    }
    return (
        <div className="container mx-auto pt-28 pb-8">
            <UserList users={users} />
        </div>
    );
};

export default Users;
