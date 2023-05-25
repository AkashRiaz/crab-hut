import React, { useContext, useState } from "react";
import './Login.css';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
    const {emailSignIn,googleSignIn,gitHubSignIn} = useContext(AuthContext);
    const [loginError,setLoginError] = useState('')
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const handleSignIn =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset('')
        
        emailSignIn(email, password)
        .then(result =>{
            const user = result.user;
            setLoginError('')
            navigate(from, {replace:true})
        })
        .catch(error =>{
            setLoginError(error.message);
        })

    }
    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result=>{
            const user = result.user;
            navigate(from, {replace:true})
        })
        .catch(error => console.log(error))
    }
    const handleGithubSignIn =()=>{
      gitHubSignIn()
      .then(result => {
        const user = result.user;
        navigate(from, {replace:true})
      })
      .catch(error =>{})
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-3xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full md:w-[600px] shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              
            </form>
            <div className="text-center">
              <div className="mb-3">
                <button onClick={handleGoogleSignIn} className="btn text-white"><FaGoogle className="mr-2 text-[#6081F4] text-xl"></FaGoogle> Login With Google</button>
              </div>
              <div className="">
                <button onClick={handleGithubSignIn} className="btn hover:bg-white bg-white text-black"><FaGithub className="mr-2 text-[#000] text-xl"></FaGithub>Login With Github</button>
              </div>
              </div>
              <div className="text-center my-5">
                <p>New to Crab Hut? Please <Link className="btn-link" to='/resister'>Resister</Link></p>
                <div className="text-red-500">
                {loginError}
              </div>
              </div>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
