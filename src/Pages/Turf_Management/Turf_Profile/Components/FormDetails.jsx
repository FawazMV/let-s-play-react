export const FormDetails = ({ errors, isEdit, details, setDetails }) => {

    const handleInputChange = (event) => {
        setDetails({
            ...details,
            [event.target.name]: event.target.value,
        });
    };
    return (
        <form >
            <div>
                <div className="sm:flex sm:justify-between">
                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Court Name</label>
                        <input disabled={!isEdit} name="courtName" className={`border w-full p-2 rounded ${errors.courtName ? 'border-red-500' : 'border-gray-400'}`} type="text" value={details.courtName} onChange={handleInputChange} />
                        {errors.courtName && <p className="text-red-500 capitalize mt-1">{errors.courtName}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Enquiry Number</label>
                        <input disabled={!isEdit} className={`border w-full p-2 rounded ${errors.enquiryNumber ? 'border-red-500' : 'border-gray-400'}`} name="enquiryNumber" type="text" value={details.enquiryNumber} onChange={handleInputChange} />
                        {errors.enquiryNumber && <p className="text-red-500 capitalize mt-1">{errors.enquiryNumber}</p>}
                    </div>
                </div>
                <div className="sm:flex sm:justify-between">
                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Default Price</label>
                        <input disabled={!isEdit} className={`border w-full p-2 rounded ${errors.Price ? 'border-red-500' : 'border-gray-400'}`} name="Price" type="text" value={details.Price} onChange={handleInputChange} />
                        {errors.Price && <p className="text-red-500 capitalize mt-1">{errors.Price}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Default Holiday</label>
                        <input disabled={!isEdit} className={`border w-full p-2 rounded ${errors.Holiday ? 'border-red-500' : 'border-gray-400'}`} name='Holiday' type="text" value={details.Holiday} onChange={handleInputChange} />
                        {errors.Holiday && <p className="text-red-500 capitalize mt-1">{errors.Holiday}</p>}
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-semibold mb-2">Location Details</label>
                    <input disabled={!isEdit} className={`border w-full p-2 rounded ${errors.loction_Details ? 'border-red-500' : 'border-gray-400'}`} type="text" name="loction_Details" value={details.loction_Details} onChange={handleInputChange} />
                    {errors.loction_Details && <p className="text-red-500 capitalize mt-1">{errors.loction_Details}</p>}
                </div>
                <div className="sm:flex sm:justify-between">
                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Opening Time</label>
                        <input disabled={!isEdit} name="openingTime" className={`border w-full p-2 rounded ${errors.openingTime ? 'border-red-500' : 'border-gray-400'}`} type="time" value={details.openingTime} onChange={handleInputChange} />
                        {errors.openingTime && <p className="text-red-500 capitalize mt-1">{errors.openingTime}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Closing Time</label>
                        <input disabled={!isEdit} name="closingTime" className={`border w-full p-2 rounded ${errors.closingTime ? 'border-red-500' : 'border-gray-400'}`} type="time" value={details.closingTime} onChange={handleInputChange} />
                        {errors.closingTime && <p className="text-red-500 capitalize mt-1">{errors.closingTime}</p>}
                    </div>
                    {/* <div className="mb-4">
                                    <label className="block font-semibold mb-2">Intervals</label>
                                    <input className="border w-full p-2 rounded" type="text" value={details.interval} onChange={handleInputChange} />
                                </div> */}
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Images</label>
                    <div className="flex">
                        {details.images.map((img, index) => (
                            <img key={index} src={img.location} alt='' className="w-20 h-20 object-cover mr-2 rounded" />
                        ))}
                    </div>
                </div>
            </div>
        </form>
    )
}