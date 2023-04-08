import { useState } from "react";
import { Link } from "react-router-dom";
import { FormValidate } from "../../../../utils/Helpers/ValidateForm";
import OtpPage from "./OtpPage";

const SignupPage = ({ submit, apiError, otpPage, modal, otpErr, otpSubmit }) => {
    const [formData, setFormData] = useState({ email: "", password: "", mobile: '', username: '' });
    const [errors, setErrors] = useState({});
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    const validateForm = () => {
        const newErrors = FormValidate(formData)
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateForm()) return;
        submit(formData)
    }
    return (
        <>
            {otpPage ? <OtpPage otpSubmit={otpSubmit} number={formData.mobile} modal={modal} otpErr={otpErr} /> : ''}
            <div className='absolute z-[-5] bg-gray-900 opacity-95 left-0 top-0 w-full min-h-screen ' />
            <div className='absolute z-[-1] grid place-items-center w-full h-screen lg:pt-14 '>
                <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                        <p className="text-sm text-gray-400">Sign up to explore features</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-3" onClick={() => setErrors({})}>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm">Username</label>
                                <input autoComplete='off' type="text" name="username" value={formData.username} onChange={handleInputChange} id="username" placeholder="Username" className={`w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 ${errors?.username ? "border-red-500" : ""}`} />
                                {errors.username && (<p className="text-red-500 mt-1 text-xs italic"> {errors.username}</p>)}
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                                <input autoComplete='off' type="email" name="email" value={formData.email} onChange={handleInputChange} id="email" placeholder="leroy@jenkins.com" className={`w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 ${errors?.email ? "border-red-500" : ""}`} />
                                {errors.email && (<p className="text-red-500 mt-1 text-xs italic"> {errors.email}</p>)}
                            </div>
                            <div>
                                <label htmlFor="mobile" className="block mb-2 text-sm">Mobile Number</label>
                                <input autoComplete='off' type="text" name="mobile" value={formData.mobile} onChange={handleInputChange} id="mobile" placeholder="Mobile Number" className={`w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 ${errors?.mobile ? "border-red-500" : ""}`} />
                                {errors.mobile && (<p className="text-red-500 mt-1 text-xs italic"> {errors.mobile}</p>)}
                            </div>

                            <div>
                                <label htmlFor="password" className="text-sm">Password</label>
                                <input type="password" autoComplete='off' name="password" id="password" placeholder="*****" value={formData.password} onChange={handleInputChange} className={`w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 ${errors?.password ? "border-red-500" : ""}`} />
                                {errors.password && (<p className="text-red-500 mt-1 text-xs italic"> {errors.password}</p>)}
                            </div>
                        </div>
                        <div className="flex p-0 m-0 justify-center text-red-500 text-xs italic"> {apiError}</div>
                        <div className="space-y-2">
                            <div>
                                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Sign Up</button>
                            </div>
                            <p className="px-6 text-sm text-center text-gray-400">Already have an account?
                                <Link to='/login' className="hover:underline text-violet-400"> Sign in</Link>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default SignupPage