import React, { useContext } from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Register = () => {
    const {createUser} =useContext(AuthContext)
    const handleLogin= e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email= form.get('email');
        const password= form.get('password');
        const name =form.get('name');
        const photo =form.get('photo')
       console.log(email,name,photo);

         // create user
         
       createUser(email,password)  
       .then(result=>{
        console.log(result.user);
       })
       
       .catch(err=> {
        console.log(err);
       })

    }


    return (
        <div>
                       <Navbar></Navbar>
     
     <div>
     <h2 className='text-3xl'>please Register </h2>
           <form onSubmit={handleLogin}  className="card-body md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' required type="text" placeholder="Name" className="input input-bordered"  />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input name='photo' required type="text" placeholder="photo url" className="input input-bordered"  />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' required type="email" placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input  name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>

    <p className='text-center top-4'>Already Have an Account? <Link className='text-blue-600' to={'/login'}> Login</Link> </p>
     </div>
        </div>
    );
};

export default Register;