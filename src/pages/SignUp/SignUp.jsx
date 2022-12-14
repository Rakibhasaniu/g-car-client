import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {

  const {createUser} = useContext(AuthContext);


    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
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
      <form className="card-body" onSubmit={handleSignUp}>
      <h1 className="text-5xl text-center font-bold">Sign Up!</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
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
          
        </div>
        <div  className="form-control mt-6">
            <input type='submit' className='btn btn-primary' value='Sign Up' />
          
        </div>
      </form>
      <p className='text-center'>Already Have An Account <Link className='text-orange-600 font-bold  ' to='/login'>Login</Link> </p>
    </div>
  </div>
</div>
    );
};

export default SignUp;