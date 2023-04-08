import { FormValidate } from '../../utils/Helpers/ValidateForm';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const LoginPage = ({ submit, apiError, title, signup }) => {
    const [formData, setFormData] = useState({ email: "", password: "" });
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
            <div className='absolute z-[-5] bg-gray-900 opacity-95 left-0 top-0 w-full min-h-screen' />
            <div className='absolute z-[-1] flex justify-center w-full h-screen items-center'>
                <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                        <p className="text-sm text-gray-400">Sign in to access your {title}</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-7 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                                <input autoComplete='off' type="email" name="email" value={formData.email} onChange={handleInputChange} id="email" placeholder="leroy@jenkins.com" className={`w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 ${errors?.email ? "border-red-500" : ""}`} />
                                {errors.email && (<p className="text-red-500 mt-1 text-xs italic"> {errors.email}</p>)}
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                    <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</a>
                                </div>
                                <input type="password" autoComplete='off' name="password" id="password" placeholder="*****" value={formData.password} onChange={handleInputChange} className={`w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 ${errors?.password ? "border-red-500" : ""}`} />
                                {errors.password && (<p className="text-red-500 mt-1 text-xs italic"> {errors.password}</p>)}
                            </div>
                        </div>
                        <div className="flex p-0 m-0 justify-center text-red-500 text-xs italic"> {apiError}</div>
                        <div className="space-y-2">
                            <div>
                                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Sign in</button>
                            </div>
                            {signup ? <p className="px-6 text-sm text-center text-gray-400">Don't have an account yet?
                                <Link to={signup} className="hover:underline text-violet-400"> Sign up</Link>.
                            </p> : ''}
                        </div>
                    </form>
                </div></div>
        </>

    )
}

export default LoginPage