import React,{useState} from 'react'
import "./experience.css";
import { educationData } from './educationData';
const Education = () => {
    const [data, setData] = useState(educationData);
    return (
        <section className="experience" id="education">
            <div className="experience-header pt-5 m-5">
                <h1>EDUCATION</h1>
            </div>
            {data.map((education)=>{
                const{title,clas,date,description,link}=education;
                return(
                    <div className="experience-jobs m-5">
                        <div className="header">
                            <h3>{title}</h3>
                            <h5>{date}</h5>
                            <h4>{clas}</h4>
                        </div>
                        <div className="my-4">
                            <p>
                                {description}
                            </p>
                            <a href={link}>{link}</a>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Education
