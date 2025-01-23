import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return ( 
        <>
        <div className='dark:bg-slate-900 dark:text-white dark:border'>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
                    <div className="relative">
                        <Link 
                            to="/" 
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}>
                            ✕
                        </Link>
                        <h3 className="font-bold text-lg">Login</h3>
                        
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                            {/* Phone */}
                            <div className="mt-4 space-y-2">
                                <span>Phone No.:</span>
                                <br />
                                <input 
                                    type="tel"
                                    placeholder='Enter Your Phone Number'
                                    className="dark:bg-slate-900 dark:text-white dark:border w-80 px-3 py-1 border rounded-md outline-none" 
                                    {...register("phone", { required: true })} 
                                />
                                <br />
                                {errors.phone && (
                                    <span className="text-sm text-red-500">
                                        This field is required
                                    </span>
                                )}
                            </div>

                            {/* Password */}
                            <div className="mt-4 space-y-2">
                                <span>Password:</span>
                                <br />
                                <input 
                                    type="password" 
                                    placeholder='Enter Your Password'
                                    className="dark:bg-slate-900 dark:text-white dark:border w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register("password", { required: true })} 
                                />
                                <br />
                                {errors.password && (
                                    <span className="text-sm text-red-500">
                                        This field is required
                                    </span>
                                )}
                            </div>

                            {/* Button */}
                            <div className='flex justify-around mt-4'>
                                <button 
                                    type="submit"
                                    className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                                >
                                    Login
                                </button>
                                <p>
                                    Not registered?{" "}
                                    <Link to="/SignUp" className='underline text-blue-500 cursor-pointer'>
                                        SignUp
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
        </>
    );
}

export default Login;