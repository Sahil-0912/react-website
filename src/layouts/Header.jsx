import React, { useEffect, useState } from 'react'
import '../assets/images/hero_1.jpg.webp'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Header = () => {
    const [headerColor, setHeaderColor] = useState(false);
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    useEffect(() => {
        const changeHeaderColorOnScroll = () => {
            if (window.scrollY > 50) {
                setHeaderColor(true);
            } else {
                setHeaderColor(false);
            }
        };
        window.addEventListener('scroll', changeHeaderColorOnScroll);
        return () => {
            window.removeEventListener('scroll', changeHeaderColorOnScroll);
        };
    }, []);

    return (
        <>
            <header>
                <nav className={`navbar navbar-expand-lg navbar-light header ${headerColor ? 'header-scrolled' : ''}`} style={{ zIndex: '999999' }} data-aos="fade-up">
                    <div className="container-fluid">
                        <h4 className='text-light mx-5 fs-3'>Oneder</h4>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-light mx-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        About us
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Team</a></li>
                                        <li><a className="dropdown-item" href="#">Pricing</a></li>
                                        <li><a className="dropdown-item" href="#">Faq</a></li>
                                        <li><a className="dropdown-item" href="#">More Links</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-light mx-2" aria-current="page" href="#">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-light mx-2" aria-current="page" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-light mx-2" aria-current="page" href="#">Testmonials</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-light mx-2" aria-current="page" href="#">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-light mx-2" aria-current="page" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container creative text-center">
                    <div className="row">
                        <div className="col-lg-12 my-5">
                            <h3>I'm Creative One Page <br></br> Template by Colorlib</h3>
                            <button className='btn btn-primary rounded-pill mt-4'>Get in Touch</button>
                        </div>
                        
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
