import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-600'>Services</p>
                <h2 className='text-5xl mt-4 mb-4 font-semibold '>Our Service Area</h2>
                <p className='mb-8'>There Are Many Variations Of Passages Of Available, But The Majority Have Suffered Alternation In Some Form</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;