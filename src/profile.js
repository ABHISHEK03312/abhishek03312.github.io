import react from "react";
import { SocialIcon } from 'react-social-icons';
import styled from "styled-components";
import ProfilePicture from "./images/profilepic.jpeg";
import whiteBg from "./images/white-bg1.webp"
import ProfilePictureCopy from "./images/profilepiccopy.jpeg";
import { Link } from "react-router-dom";
import LoadingIcons from 'react-loading-icons'
import React,{useState,useEffect} from 'react';

const Profile= () => {

    const [loaded, setloaded] = useState(false)

    useEffect(() => {
        setloaded(true)
    })

    if(!loaded){
        return(
            <div className='loader'>
                <LoadingIcons.TailSpin className='loader-symbol'/>
            </div>
        )
    }

    return (
        <div className="profile"> 
            <div className="profile-sub-content">
                <div className="profile-pic">
                    <img src = {ProfilePictureCopy} alt="Abhishek" className="profile-img" />
                </div>
                <div className="profile-content">
                    <div className="profile-content-text">
                        <p className="profile-para-code-p">
                            {/* <pre className="profile-para-code">
                                >>I'm Abhishek Vaidyanathan valbopadmvadmvkdsmvsd
                            </pre> */}
                            - I'm Abhishek Vaidyanathan
                        </p>
                        <p className="profile-para">
                            I am a final year student majoring in Data science and Artificial Intelligence at Nanyang Technological University 
                            with a keen interest in Data science and machine learning, I am passionate about developing and solving real world 
                            problems. 
                        </p>
                        {/* <div>
                            <div className="contact-links">
                                <h3 className="profile-link-headers">
                                    Name:  
                                </h3>
                                <p className="profile-link-text"> Abhishek Vaidyanathan</p>
                            </div>
                            <div className="contact-links">
                                <h3 className='profile-link-headers'>
                                    Email:
                                </h3>
                                <p><a href='mailto:vaidyanathanabhishek@gmail.com' className="profile-links">
                                vaidyanathanabhishek@gmail.com</a>
                                </p>
                            </div>
                            <div className="contact-links">
                                <h3 className="profile-link-headers">
                                    Contact:  
                                </h3>
                                <p className="profile-link-text"> +65 85755238 </p>
                            </div>
                            <div className="social-icons">
                                <h3 className="profile-link-headers">
                                    Social:
                                </h3>
                                <div className="social-indv-icons">
                                    <SocialIcon url="https://www.linkedin.com/in/abhishek-vaidyanathan-3364b2196/" style={{ height: 40, width: 40 }}/>
                                </div>
                                <div className="social-indv-icons">
                                    <SocialIcon url="https://github.com/ABHISHEK03312" bgColor="rgb(255, 255, 255)" style={{ height: 40, width: 40 }}/>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="resume-button-div">
                        <a href="./AbhishekVaidyanathanResume.pdf" target="_blank" download style={{'text-decoration':'none'}}>
                            <button className="resume">Download Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;