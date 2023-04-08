import React, { useRef, useState } from "react";
import { ValidateTurfRegistration } from "../../../../utils/Helpers/ValidateForm";
import { EmailCheck, register } from '../../../../API/ServerRequests/Turf/TurfAuth'
import ContactInfo from "./ContactInfo";
import { TurfRegistrationDiv as FormDiv, initialState, errorState } from "../../../../utils/Helpers/Constats";
import Otp from "./Otp";
import LocationSearch from "./LocationSearch.jsx";


const Form = ({ div }) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [registerError, setRegisterError] = useState('')
    const [otp, setOtp] = useState(false);
    const [form, setFrom] = useState({})

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };
    const updateLocation = (obj) => {
        setFormData({
            ...formData, ...obj
        });
    };

    const validate = () => {
        const err = ValidateTurfRegistration(formData)
        setErrors(err);
        if (Object.keys(err).length) return false;
        return true;
    }
    const Registration = () => {
        register(form).then(() => setFormData(initialState))
            .catch(error => setRegisterError(error))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            const form = new FormData(event.target)
            form.append('state', formData.state)
            form.append('distric', formData.distric)
            setFrom(form)
            EmailCheck(formData.email, formData.mobile).then(() => setOtp(true))
                .catch((err) => setRegisterError(err))
        }
    };

    return (
        <>
            {otp ? <Otp number={formData.mobile} modal={setOtp} Registration={Registration} /> : ''}
            <div ref={div} className="md:px-32 lg:py-20 sm:px-20 px-5 py-10 ">
                <div className="grid grid-cols-12 gap-4">
                    <div className="lg:col-span-8 col-span-12">
                        <div className="md:px-20 xl:px-36 px-10 py-10">
                            <h1 className="font-bold text-3xl mb-7">PATNERSHIP FORM</h1>
                            <form className="w-full" onClick={() => setErrors(errorState)} onSubmit={handleSubmit}>
                                {
                                    FormDiv.map(val => (
                                        <div className="mb-4" key={`div${val.id}`} >
                                            <label className="block text-gray-600 font-semibold mb-2" htmlFor={`${val.id}Register`}>{val.label}</label>
                                            <input autoComplete="off" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors[val.id + 'Error'] ? "border-red-500" : ""}`}
                                                id={`${val.id}Register`} type="text" name={`${val.id}`} placeholder={`${val.placeholder}`} value={formData[val.id]} onChange={handleChange} />
                                            <p className="text-red-500 text-xs italic">{errors[val.id + 'Error']}</p>
                                        </div>
                                    ))
                                }
                                <LocationSearch formLocation={updateLocation} err={errors.locationError} />
                                <div className="mb-4" key='img' >
                                    <label className="block text-gray-600 font-semibold mb-2" htmlFor='img'>Turf Images</label>
                                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.imagesError ? "border-red-500" : ""}`}
                                        id='img' type="file" name='images' placeholder='Add Turf Images' multiple onChange={async (e) => {
                                            const images = Array.from(e.target.files)
                                            console.log(images)
                                            setFormData({ ...formData, images })
                                        }} />
                                    <p className="text-red-500 text-xs italic">{errors.imagesError}</p>
                                </div>
                                <div className="mb-3 text-red-600 text-sm text-center">{registerError}</div>
                                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <ContactInfo />
                </div>
            </div>

        </>

    );
};

export default Form;

