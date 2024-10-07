import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Aos from 'aos';
import 'aos/dist/aos.css'

const ContactForm = () => {

    useEffect(() => {
        Aos.init({duration:1000})
    },[])

    const { register, handleSubmit, formState: { errors } } = useForm();

    function regist(data) {
        console.log(data);
    }

    return (
        <>
            <section className='contact' data-aos="fade-up">
                <h4 className='text-center mt-3'>Contact Us</h4>
                <div className="container">
                    <div className="row my-3">
                        <div className="col-lg-4 text-center">
                            <i class="fa-solid fa-location-dot"></i>
                            <p className='mt-3'>203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <i class="fa-solid fa-phone"></i>
                            <h6 className='mt-3'>+1 232 3235 324</h6>
                        </div>
                        <div className="col-lg-4 text-center">
                            <i class="fa-solid fa-envelope"></i>
                            <h6 className='mt-3'>youremail@domain.com</h6>
                        </div>
                    </div>
                </div>
                <div className="col-8 mx-auto my-5 p-5 shadow">
                    <h5>Contact Form</h5>
                    <form method='post' onSubmit={handleSubmit(regist)}>
                        <div className="row">
                            <div className="col-6">
                                <div className="my-3">
                                    <label htmlFor="fname" className='text-dark'>First Name</label>
                                    <input type='text' className='form-control'  {...register('fname',
                                        {
                                            required: {
                                                value: true,
                                                message: "Enter First Name"
                                            },
                                            minLength: {
                                                value: 3,
                                                message: "Must be 3 Charcter"
                                            },
                                            maxLength: {
                                                value: 10,
                                                message: "Must be 10 Charcter"
                                            },
                                            pattern: {
                                                value: /[A-Za-z]/,
                                                message: "only string"
                                            }
                                        }
                                    )} />
                                    <p className='text-danger'>{errors?.fname?.message}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="my-3">
                                    <label htmlFor="lname" className='text-dark'>Last Name</label>
                                    <input type='text'  {...register('lname',
                                        {
                                            required: {
                                                value: true,
                                                message: "Enter Last Name"
                                            },
                                            minLength: {
                                                value: 3,
                                                message: "Must be 3 Charcter"
                                            },
                                            maxLength: {
                                                value: 10,
                                                message: "Must be 10 Charcter"
                                            },
                                            pattern: {
                                                value: /[A-Za-z]/,
                                                message: "only string"
                                            }
                                        }
                                    )} className='form-control' />
                                    <p className='text-danger'>{errors?.lname?.message}</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="my-3">
                                    <label htmlFor="email" className='text-dark'>Email</label>
                                    <input type='email'  {...register('email',
                                        {
                                            required: {
                                                value: true,
                                                message: 'Enter Email'
                                            },
                                            pattern: {
                                                value: /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
                                                message: "Enter Valid Email"
                                            }
                                        }
                                    )} className='form-control' />
                                    <p className='text-danger'>{errors?.email?.message}</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="my-3">
                                    <label htmlFor="subject" className='text-dark'>Subject</label>
                                    <input type='text'  {...register('subject',
                                        {
                                            required: {
                                                value: true,
                                                message: "Enter Subject"
                                            },
                                            minLength: {
                                                value: 10,
                                                message: "Must be 25 Charcter"
                                            },
                                            maxLength: {
                                                value: 15,
                                                message: "Must be 35 Charcter"
                                            },
                                            pattern: {
                                                value: /[A-Za-z]/,
                                                message: "only string"
                                            }
                                        }
                                    )} className='form-control' />
                                    <p className='text-danger'>{errors?.subject?.message}</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="my-3">
                                    <label htmlFor="message" className='text-dark'>Message</label>
                                    <textarea  {...register('message',
                                        {
                                            required: {
                                                value: true,
                                                message: "Enter Message"
                                            },
                                            minLength: {
                                                value: 10,
                                                message: "Must be 25 Charcter"
                                            },
                                            maxLength: {
                                                value: 15,
                                                message: "Must be 35 Charcter"
                                            },
                                            pattern: {
                                                value: /[A-Za-z]/,
                                                message: "only string"
                                            }
                                        }
                                    )} className='form-control'></textarea>
                                    <p className='text-danger'>{errors?.message?.message}</p>
                                </div>
                            </div>
                        </div>
                        <button className='btn btn-primary rounded-pill'>Send Message</button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default ContactForm;
