import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import Swal from "sweetalert2";
import { AuthContex } from "../../../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa6";

const Login = () => {
    const { signIn } = useContext(AuthContex);
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const [error, setError] = useState('')
    
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successfull',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/dashboard');
            })
            .then(error => {
                setError(error);
                console.log(error);

            })
    }
    return (
        <div className="bg-sky-200">
            <div className="hero min-h-screen bg-base-200">
                <div className="card w-[500px] flex flex-col justify-center items-center shadow-2xl bg-base-100">
                    <div className="flex flex-col items-center mt-9">
                        <img src="/src/assets/logo.png" className="mb-10" alt="" />
                        <h1 className="text-xl font-medium">Login To Your Account</h1>
                        <p className="text-red-500">{error}</p>
                    </div>
                    <div>
                        <form onSubmit={handleLogin} className="card-body w-[400px]">
                            <div className="flex flex-col">
                                <label htmlFor="Email">Email</label>
                                <input type="email" defaultValue={name} className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Email" id="Email" name="email" />
                            </div>
                            <div className="flex flex-col relative">
                                <label htmlFor="password">Password</label>
                                <input type={show ? "text" : "password"} defaultValue={name} className="rounded-[13px] p-2 mt-2 focus:outline-slate-400 border text-black" placeholder="Password" id="password" name="password" />
                                <span onClick={() => setShow(!show)} className="absolute top-[45px] right-[15px]">
                                    {
                                        show ? <GoEye /> : <GoEyeClosed />
                                    }
                                </span>
                                <label className="label text-[#0C21C7] text-xs">
                                    <Link href="#" className="">Forgot password?</Link>
                                </label>

                            </div>
                            <div className="form-control mt-6">
                                <button className="cta-btn ml-3">Login</button>
                            </div>
                            <div className="form-control mt-6">
                                <button className="cta-btn ml-3"><FaGoogle />Login with Google</button>
                            </div>
                        </form>
                    </div>
                    <div className=" mt-10 mb-10 text-xs">
                        <p className="text-[#989898]">Don't have an account? <span className="text-[#0C21C7]"><Link to={"/signup"}>Sign Up</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;