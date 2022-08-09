import React from 'react';
import jobCardsImage from "./images/bg.webp";
import './css-styles.css'
import { BiLink } from 'react-icons/bi';
import { FiExternalLink } from 'react-icons/fi';

const onclick = () =>{
    console.log("button pressed")
}

const ProjectCards =({Description,projectData})=>{
    return (
            <div className='jobCardsDummy'>
                <div className='jobCardsMain'>
                    {/* <div className="job-cards-img">
                        <img src = {jobCardsImage} alt="jobcardsimage" className="jobCards-img" />
                    </div> */}
                    <div className='jobCards-content'>
                        <div className='jobCards-sub-content'>
                            <div className='jobCards-para-content'>
                                <h3 className='jobCards-para-text'>
                                    {projectData.name.charAt(0).toUpperCase()+projectData.name.slice(1)}
                                </h3>
                                {projectData.about!="None" ?
                                    <p className='jobCards-para-text'>
                                        {projectData.about}
                                    </p>:null
                                }
                            </div>
                            <div className='buttons-styles'>
                                {projectData.languages.length!=0 ?
                                <div className='buttons-start'>
                                    {projectData.languages.map((language,i)=>
                                    <button className='btn-orange' onClick={onclick} key={i}>{language}</button>
                                    )}
                                </div>:
                                <div className='buttons-start'>
                                    <button className='btn-orange' onClick={onclick}>Other</button>
                                </div>
                                }
                                <div className='buttons-end'>
                                    <a href={projectData.link} className='buttons-end-a'>
                                        {/* <BiLink style={{ height: 20, width: 20, verticalAlign: 'middle', color:'rgb(255, 255, 255)'}}/> */}
                                        <button className='code-button' onClick={onclick}>
                                            Code
                                        </button>
                                        <FiExternalLink style={{ height: 20, width: 20, verticalAlign: 'middle', color:'rgb(255, 255, 255)'}}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default ProjectCards;