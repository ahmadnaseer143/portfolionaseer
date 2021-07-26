import React, {useState} from 'react'
import "./experience.css";
import { experienceData } from './experienceData';
const Experience = () => {
    const [data, setData] = useState(experienceData);
    return (
        <section className="experience" id="experience">
            <div className="experience-header pt-5 m-5">
                <h1>EXPERIENCE</h1>
            </div>
            {data.map((experience)=>{
                const{title,date,description}=experience;
                return(
                    <div className="experience-jobs m-5">
                        <div className="header">
                            <h3>{title}</h3>
                            <h5>{date}</h5>
                        </div>
                        <div>
                            <p>
                                {description}
                            </p>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Experience
