import React from 'react'
import "./welcome.css";
import { GrLinkNext } from 'react-icons/gr';
import Nassy from "./Images/nassy.jpeg";
import Lampard from "./Images/lampard.jpg";
import Thomas from "./Images/thomas.jpg";
import Joker from "./Images/joker.jpg";
import photo1 from "./Images/1.png";
import photo2 from "./Images/2.png";
import photo3 from "./Images/3.png";
import photo4 from "./Images/4.png";
const Welcome = () => {
    return (
        <section className="welcome" id="home">
                        <div className="welcome-image">
                            <img src={photo3} alt="Picture Deleted" />
                        </div>
            <div className="welcome-text-container">
                <div className="welcome-text">
                    <h4>Hello Everyone</h4>
                    <div>
                        <div id="typing">I AM <span>Naseer</span></div>
                        <div id="crow">|</div>
                    </div>
                    {/* <p className="name-container d-flex">I'm
                        <h4 className="name px-2"> Naseer</h4>
                                                <span className="name"> N</span>
                         <span className="name">a</span>
                         <span className="name">s</span>
                         <span className="name">e</span>
                         <span className="name">e</span>
                         <span className="name">r</span>
                    </p> */}
                    <h4>I love to build amazing apps.</h4>
                    {/* <h3>World class consumer and trends research capabilities. We design for tomorrow customers in tomorrow’s markets.
                    </h3> */}
                </div>
                {/* <button>Hire me <GrLinkNext style={{fill: 'blue'}} className="welcome-text-container-icon"/></button> */}
            </div>
        </section>
    )
}

export default Welcome
