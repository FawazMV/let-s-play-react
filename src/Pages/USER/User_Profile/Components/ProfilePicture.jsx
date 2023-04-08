import avatar from '../../../../assets/avatar.png'

const ProfilePicture = ({ user }) => {
    return (
        <>
            <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium">Personal Inormation</p>
                <p className="text-xs">Here you can edit and update your profile picture and details</p>
                <div className="col-span-full">
                    {/* <label for="bio" className="text-sm">Photo</label> */}
                    <div className="flex pt-10 justify-center space-x-2">
                        <img src={user.profile ? user.profile.location : avatar} alt={user.name} className="w-48 h-48 rounded-full bg-gray-800" />
                        {/* <button type="button" className="px-4 py-2 border rounded-md border-gray-100">Change</button> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePicture