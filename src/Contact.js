import React from 'react'
import "./contact.css";
const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="d-block d-md-flex">
                <form action="" className="form">
                    <div className="contact-header ms-3">
                        <h1>Contact Me</h1>
                        <p>Have a project or question? Send me a message. I will reply within 48 hours.</p>
                    </div>
                    <div className="d-flex flex-column contact-input-container">
                        <input type="text" placeholder="Enter Name" />
                        <input type="email" placeholder="Enter Email" />
                        <textarea name="" id="" cols="15" rows="2" placeholder="Enter your Message"></textarea>
                    </div>
                    <button className="btn btn-outline-info">Contact Me</button>
                </form>
                <div className="contact-email-container m-md-5 p-5 my-5">
                    <h2>Email me at</h2>
                    <a href="">anaseer942@gmail.com</a>
                    <h2>Call me at</h2>
                    <a href="">+923180189925</a>
                </div>
            </div>
        </section>
    )
}

export default Contact
