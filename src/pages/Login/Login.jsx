import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {

  const {login} = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result => {
          const user =  result.user;
          console.log(user);
        })
        .catch(err => console.error(err));
    }
    return (
        <div className="hero w-ful mt-12 ">
        <div className="hero-content  grid gap-15 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
            <img className='w-3/4' src={img} alt='' />
            </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-20">
      <form className="card-body" onSubmit={handleLogin}>
      <h1 className="text-5xl text-center font-bold">Login now!</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div  className="form-control mt-6">
            <input type='submit' className='btn btn-primary' value='Login' required />
          
        </div>
      </form>
      <p className='text-center'>New To G-Car <Link className='text-orange-600 font-bold  ' to='/signup'>Sign Up</Link> </p>
    </div>
  </div>
</div>
    );
};

export default Login;