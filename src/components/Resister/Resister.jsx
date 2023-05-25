import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Resister = () => {
    const {createUser,error} = useContext(AuthContext);
    
    const handleResister =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        form.reset('')
        

        createUser(email,password,name,photo)
        // .then(result=>{
        //     const user = result.user;
        //     console.log(user)
        // })
        // .catch(error => console.log(error))

    }
    return (
        <div>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
              <div className="text-center ">
                <h1 className="text-3xl font-bold">Resister now!</h1>
              </div>
              <div className="card flex-shrink-0 w-full md:w-[600px] shadow-2xl bg-base-100">
                <form onSubmit={handleResister} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name='name'
                      placeholder="Enter Your Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name='email'
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
                      name='password'
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      type="text"
                      name='photo'
                      placeholder="Photo url"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                  <div>
                    <p>Already have an account ? Please <Link className="btn-link" to='/login'>Login</Link></p>
                  </div>
                  <div className='text-red-500'>{error}</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Resister;