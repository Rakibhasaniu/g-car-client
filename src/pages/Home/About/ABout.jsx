import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const ABout = () => {
    return (
        <div className="hero my-20">
  <div className="hero-content flex-col lg:flex-row">
    <div className='w-1/2 relative'>
    <img src={person} alt=""  className=" w-4/5 h-full rounded-lg shadow-2xl" />
    <img src={parts} alt="" className=" absolute w-3/5 right-5 top-1/2 border-8 rounded-lg shadow-2xl" />
    </div>
    <div className='w-1/2'>
        <p className='text-2xl text-orange-600 font-bold '>About us</p>
      <h1  className="text-5xl font-bold mt-8">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem ipsum <br /> Available But the majority have suffered alternations in some <br /> form By injected humour or Randomised words which don,t look even slightly believable</p>
      <button className="btn btn-primary mt-12">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default ABout;