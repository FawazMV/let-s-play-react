
const PasswordUpdate = () => {
    return (
        <>
            <div className="col-span-full sm:col-span-2 text-gray-900">
                <label htmlFor="password" className="text-sm text-gray-100">Change Your Password</label>
                <input id="password" type="password" placeholder="New Password" className="w-full px-2 py-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700" />
            </div>
            <div className="col-span-full sm:col-span-2 text-gray-900">
                <label htmlFor="confirmpassword" className="text-sm text-gray-100">Confirm Passowrd</label>
                <input id="confirmpassword" type="password" placeholder="Confirm Passowrd" className="w-full px-2 py-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700" />
            </div>
            <div className="col-span-full flex justify-end sm:col-span-2">
                <button type="button" className="my-[20px]  py-[9px] w-full  justify-center font-semibold text-sm border rounded border-gray-100 hover:bg-gray-100 hover:text-gray-900 transition duration-300  text-gray-100">Update Passowrd</button>
            </div>
        </>
    )
}


export default PasswordUpdate