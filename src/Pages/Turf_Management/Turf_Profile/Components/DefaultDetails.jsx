const DefaultDetails = ({ email, mobile, location, event }) => (
    <div>
        <h2 className="text-lg font-semibold mb-2">Default Details</h2>
        <div className="bg-white p-4 md:flex md:justify-between md:px-10 rounded shadow">
            <div className="mb-4">
                <label className="block font-bold mb-2">Email</label>
                <p className="text-gray-700">{email}</p>
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2">Phone</label>
                <p className="text-gray-700">{mobile}</p>
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2">Location</label>
                <p className="text-gray-700">{location}</p>
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2">Sports Type</label>
                <p className="text-gray-700">{event}</p>
            </div>
        </div>
    </div>
)
export default DefaultDetails