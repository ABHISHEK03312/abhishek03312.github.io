import react from "react";
import { SocialIcon } from 'react-social-icons';
import styled from "styled-components";
import ProfilePicture from "./images/profilepic.jpeg";
import whiteBg from "./images/white-bg1.webp"
import ProfilePictureCopy from "./images/profilepiccopy.jpeg";
import { Link } from "react-router-dom";
import LoadingIcons from 'react-loading-icons'
import React,{useState,useEffect} from 'react';
import MyPDF from './AbhishekVaidyanathanResume.pdf';
import Typewriter from 'typewriter-effect';

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
                <div className="profile-content">
                    <div className="profile-content-text">
                        <p className="profile-para-code-p">
                            <Typewriter
                            options={{
                                strings: ["I'm Abhishek Vaidyanathan ", "I'm a Developer","I'm a Data scientist"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        </p>
                        <p className="profile-para">
                         A final year student studying at Nanyang Technological University. Passionate in Data science, I am also a football fanatic. I believe in giving it my best shot in eveything I do.
                        </p>
                    </div>
                    <div className="resume-button-div">
                        <a href={MyPDF} download="AbhishekVaidyanthanResume.pdf" style={{'text-decoration':'none'}}>
                            <button className="resume">Download Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;