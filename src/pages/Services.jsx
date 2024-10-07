import React, { useEffect } from 'react';
import ServiceCardUi from '../layouts/ServiceCardUi';
import ServiceData from '../layouts/ServiceData';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <>
            <section className='services my-5' data-aos="fade-up">
                <h4 className='text-center'>Our Services</h4>
                <div className="container">
                    <div className="row">
                        {
                            ServiceData.map((servicedata, index) => {
                                return (
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6" key={index}>
                                        <ServiceCardUi 
                                            title={servicedata.title} 
                                            icon={servicedata.icon} 
                                            paragraph={servicedata.paragraph} 
                                            more={servicedata.more} 
                                        />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;
