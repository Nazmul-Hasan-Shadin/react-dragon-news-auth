
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import { useContext } from 'react';
import  { AuthContext } from '../../providers/AuthProviders';

const Login = () => {
    const {signIn}= useContext(AuthContext);
    const location =useLocation();
    const navigate= useNavigate();
    console.log('location in login page ',location);
    const handleLogin= e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email= form.get('email');
        const password= form.get('password');
        console.log(form.get('password'));

        //  sign in user
        signIn(email,password)
       .then(result=>{
        console.log(result.user);
         navigate(location?.state? location.state : '/');


       })
       .catch(err=>{
        console.log(err);
       })




    }

    return (
        <div>
           <Navbar></Navbar>
     
     <div>
     <h2 className='text-3xl'>please login </h2>
           <form onSubmit={handleLogin}  className="card-body md:w-3/4 lg:w-1/2 mx-auto">
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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

    <p className='text-center top-4'>DOnt have an account <Link className='text-blue-600' to={'/register'}> Register</Link> </p>
     </div>

        </div>
    );
};

export default Login;