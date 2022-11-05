import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(()=> {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-600'>Services</p>
                <h2 className='text-5xl font-semibold '>Our Service Area</h2>
                <p>There Are Many Variations Of Passages Of Available, But The Majority Have Suffered Alternation In Some Form</p>
            </div>
            <div>
               
                {

                }
            </div>
        </div>
    );
};

export default Services;