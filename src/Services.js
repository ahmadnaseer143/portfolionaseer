import React, {useState} from 'react'
import Project from "./Projects";
import Service from './Service';
import { servicesData } from './servicesData';
const Services = () => {
    const [data, setData] = useState(servicesData);
    return (
        <section className="services" id="services">
            <div className="row">
            <div className="col-12 about-header">
                <div className="mx-auto">
                    <h1 className="text-primary mt-5">Services Provided</h1>
                    <div className="line"></div>
                </div>
            </div>
            </div>
            <div className="row mx-5">
                {data.map((service)=>{
                    const {title,description,url,link}=service;
                    return(
                            <Service url={url} title={title} description={description}/>
                    )
                })}
            </div>
        </section>
    )
}

export default Services
