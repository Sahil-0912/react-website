import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row border-bottom">
                        <div className="col-xl-3 col-lg-4 col-md-6 my-5">
                            <h4 className='text-light fs-5'>About us</h4>
                            <p>Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit. Neque facere laudantium  <br></br>magnam voluptatum autem. Amet aliquid  <br></br>nesciunt veritatis aliquam.</p>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 my-5">
                            <h4 className='text-light fs-5 mx-5'>Quick Links</h4>
                            <ul className='mx-4 my-3'>
                                <li>About us</li>
                                <li>Services</li>
                                <li>Testmonials</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 my-5">
                            <h4 className='text-light fs-5 mx-5'>Follow Us</h4>
                            <i class="fa-brands fa-facebook ms-5"></i>
                            <i class="fa-brands fa-twitter twitter ms-4"></i>
                            <i class="fa-brands fa-instagram ms-4"></i>
                            <i class="fa-brands fa-linkedin ms-4"></i>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 my-5">
                            <h4 className='text-light fs-5'>Subcribe Newsletter</h4>
                            <div className="foot-input">
                            <div class="input-group mb-3 my-3">
                                <input type="text" class="form-control" placeholder="Enter Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <span class="input-group-text" id="basic-addon2">Send</span>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h6 class="text-center p-5">Copyright ©2024 All rights reserved | This template is made with <i className="fa-solid fa-heart"></i> by Colorlib</h6>
            </footer>
        </>
    )
}

export default Footer
