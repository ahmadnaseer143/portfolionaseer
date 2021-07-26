import React, {useState} from 'react'
import "./testimonials.css";
import { testimonialsData } from './testimonialsData';
import Testimonial from './Testimonial';
import {Carousel} from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";
const Testimonials = () => {
    const [data, setData] = useState(testimonialsData);
    return (
        <section id="testimonials" className="testimonials-section">
            <div className="col-12 about-header">
                <div className="mx-auto">
                    <h1 className="text-primary mt-5">Testimonials</h1>
                    <div className="line"></div>
                </div>
            </div>
            <Carousel>
                {data.map((testimony)=>{
                    const{name,url,description}=testimony;
                    return(
                        <>
                        <Testimonial name={name} url={url} description={description}/> 
                        </>
                    )
                })}
            </Carousel>
        </section>
    )
}

export default Testimonials
{/* <Carousel.Item>
                    <div className="col-md-6 image-container">
                        <Avatar className="messages-avatar"  style={{ height: '30%', width: '30%' }}  alt="username" src="https://pbs.twimg.com/profile_images/1035939122345664512/GSDsVXxj_400x400.jpg">
                        </Avatar>
                    </div>

                    <div className="caption-container">
                        <Carousel.Caption className="caption mx-5">
                        <h3>Second slide label</h3>
                        <p className="ms-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> 
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="col-md-6 image-container">
                        <Avatar className="messages-avatar"  style={{ height: '30%', width: '30%' }}  alt="username" src="https://pbs.twimg.com/profile_images/1035939122345664512/GSDsVXxj_400x400.jpg">
                        </Avatar>
                    </div>
                    <div className="caption-container">
                        <Carousel.Caption className="caption mx-5">
                        <h3>Third slide label</h3>
                        <p className="ms-5">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item> */}
