import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa6";
import { AuthContex } from "../../../AuthProvider/AuthProvider";



const SignUp = () => {
    const { createUser } = useContext(AuthContex)
    const [show, setShow] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [error, setError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";

    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (password !== confirmPassword) {
            setError("Password did'nt match!")
        }
        else {
            // const signIn = { email, password }
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user)
                    // if (success) {
                    //     Swal.fire({
                    //         position: 'center',
                    //         icon: 'success',
                    //         title: 'Order Added',
                    //         showConfirmButton: false,
                    //         timer: 1500
                    //     })
                    // }

                    navigate("/dashboard");
                })
                .then(error => console.log(error))
        }


    }
    return (
        <div className="bg-sky-200">
            <div className="hero min-h-screen bg-base-200">
                <div className="card w-[500px] flex flex-col justify-center items-center shadow-2xl bg-base-100">
                    <div className="flex flex-col items-center mt-4">
                        <img src="/src/assets/logo.png" className="mb-3" alt="" />
                        <h1 className="text-xl font-medium">Sign Up To Your Account</h1>
                    </div>
                    <div>
                        <form onSubmit={handleSignup} className="card-body w-[400px]">
                            <div className="flex flex-col">
                                <label htmlFor="mane">Full Name</label>
                                <input type="text" className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Full Name" id="mane" name="name" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="Email">Email</label>
                                <input type="email" className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Email" id="Email" name="email" />
                            </div>
                            <div className="flex flex-col relative">
                                <label htmlFor="password">Password</label>
                                <input type={show ? "text" : "password"} className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Password" id="password" name="password" />
                                <span onClick={() => setShow(!show)} className="absolute top-[45px] right-[15px]">
                                    {
                                        show ? <GoEye /> : <GoEyeClosed />
                                    }
                                </span>
                            </div>
                            <div className="flex flex-col relative">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type={showConfirm ? "text" : "password"} className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Confirm Password" id="confirmPassword" name="confirmPassword" />
                                <span onClick={() => setShowConfirm(!showConfirm)} className="absolute top-[45px] right-[15px]">
                                    {
                                        showConfirm ? <GoEye /> : <GoEyeClosed />
                                    }
                                </span>
                                <p className="text-red-500">{error}</p>
                                <label className="label text-[#0C21C7] text-xs">
                                    <Link href="#" className="">Forgot password?</Link>
                                </label>

                            </div>
                            <div className="form-control mt-3">
                                <button className="cta-btn ml-3">Sign Up</button>
                            </div>
                            <div className="form-control mt-3">
                                <button className="cta-btn ml-3"><FaGoogle /> Sign Up With Google</button>
                            </div>
                        </form>
                    </div>
                    <div className=" mt-3 mb-4 text-xs">
                        <p className="text-[#989898]">Already have an acoount? <span className="text-[#0C21C7]"><Link to={"/login"}>Sign In</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;