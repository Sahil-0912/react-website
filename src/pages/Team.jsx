import React, { useEffect } from 'react';
import TeamCardUi from '../layouts/TeamCardUi';
import TeamData from '../layouts/TeamData';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Team = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <>
            <section className='team my-5' data-aos="fade-up">
                <h4 className='text-center'>Our Team</h4>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima <br /> neque tempora reiciendis.</p>
            </section>
            <div className="container" data-aos="fade-up">
                <div className="row">
                    {
                        TeamData.map((teamdata, index) => {
                            return (
                                <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                                    <TeamCardUi 
                                        title={teamdata.title} 
                                        designation={teamdata.designation} 
                                        image={teamdata.image} 
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Team;
