import './css-styles.css'
import React,{useState,useEffect} from 'react';
import LoadingIcons from 'react-loading-icons'
import SkillIcon from './iconSkill';
import {SiOpencv,SiKeras,SiScikitlearn,SiPytorch,SiDatabricks,SiMicrosoftazure,SiApachespark} from"react-icons/si";
import {DiDjango} from"react-icons/di";
import {FcStatistics} from"react-icons/fc";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { VscGithub} from 'react-icons/vsc';
import { FiMail } from 'react-icons/fi';
import { BsMap ,BsTelephone} from 'react-icons/bs';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import ProfilePictureCopy from "./images/profile_pic2.png";
import emailjs from '@emailjs/browser';

const About=()=> {
    const [AccessCSS, setAccessCSS] = useState("about-content")
    const [open, setopen] = useState("about-main-no-blur")
    const [loaded, setloaded] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [toSend, setToSend] = useState({    
        'from_name': "",
        'subject': "",
        'message': "",
        'reply_to': "",});

    const handleClick = () => {
        // setclicked(true)
        setAccessCSS("about-content-open-popup")
        setopen("about-main-blur")
    }

    const handleClose = () => {
        // setclicked(false)
        setAccessCSS("about-content")
        setopen("about-main-no-blur")
    }

    // const handleNameChange = (e) => {
    //     setName(e.target.value)
    //     setToSend({
    //         'from_name': e.target.value,
    //         'subject': subject,
    //         'message': message,
    //         'reply_to': email,})
    // }

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value)
    //     setToSend({
    //         'from_name': name,
    //         'subject': subject,
    //         'message': message,
    //         'reply_to': e.target.value,})
    // }

    // const handleSubjectChange = (e) => {
    //     setSubject(e.target.value)
    //     setToSend({
    //         'from_name': name,
    //         'subject': e.target.value,
    //         'message': message,
    //         'reply_to': email,})
    // }

    // const handleMessageChange = (e) => {
    //     setMessage(e.target.value)
    //     setToSend({
    //         'from_name': name,
    //         'subject': subject,
    //         'message': e.target.value,
    //         'reply_to': email,})
    // }
    const handleNameChange = (e) => {
        setName(e.target.value)
        setToSend({...toSend,
            'from_name': e.target.value,})
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        setToSend({...toSend,
            'reply_to': e.target.value,})
    }

    const handleSubjectChange = (e) => {
        setSubject(e.target.value)
        setToSend({...toSend,
            'subject': e.target.value,})
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
        setToSend({...toSend,
            'message': e.target.value,})
    }

    const handleSendEmail = () => {
        // setToSend({
        //     'from_name': name,
        //     'subject': subject,
        //     'message': message,
        //     'reply_to': email,})
        emailjs.send('service_61dyoug','template_0j6hlfa',toSend,'kya1ThtTJKLvocsS4')
    }
    useEffect(() => {
        setloaded(true)
    },[open])

    if(!loaded){
        return(
            <div className='loader'>
                <LoadingIcons.TailSpin className='loader-symbol'/>
            </div>
        )
    }

    return (
          <div className='about-content-main'>
              <div className={open}>
                <div className='about-me-text'>
                    <p className='heading-p'>
                        -About
                    </p>
                    <div className='Bibliography-info'>
                        <div  className='Bibliography-img'>
                            <div className="about-pic">
                                <img src = {ProfilePictureCopy} alt="Abhishek" className="about-img"></img>
                                <a href="mailto:vaidyanathanabhishek@gmail.com" className = 'about-pic-icon-a'>
                                    <FiMail url="mailto:vaidyanathanabhishek@gmail.com" style={{ height: 40, width: 40,color: 'white','background-color':'#555','border-radius':'100%','border':'5px solid #555',}}/>
                                </a>
                                <a href="https://www.linkedin.com/in/abhishek-vaidyanathan-3364b2196/" className = 'about-pic-icon-b'>
                                    <TiSocialLinkedinCircular url="https://www.linkedin.com/in/abhishek-vaidyanathan-3364b2196/" style = { {'height': "50",'width': '50','position': "absolute",'bottom':'-1%','left':'20%','color': 'white','background-color':'#555','border-radius':'100%'}} />
                                </a>
                                <a href="https://github.com/ABHISHEK03312" className = 'about-pic-icon-c'>
                                    <VscGithub url="https://github.com/ABHISHEK03312" style={{position:'absolute',bottom:'-1%',left:'65%',height: '37', width: '37', color: 'white',fill: 'white','background-color':'#555','border-radius':'100%','border':'5px solid #555'}}/>
                                </a>
                            </div>
                        </div>
                        <div className='Bibliography-text'>
                            {/* <p className='about-text-content'>
                                Majoring in Data science and AI.  
                                I have developed a keen intertest in the applications of Data science in Finance
                            </p> */}
                            <p className='about-text-content'>
                                Majoring in Data science and AI, I have developed a keen interest in forecasting and predictive analysis.  
                                <br/>
                                <br/>
                                Following this passion, I am currently working on my final year project under Prof. Jagath Chandana Rajapakse.
                                My research is on forecasting the demand of medical products using external covaraiates such as incorporating google search trends and other forms of unstructured data.
                                <br/>
                                My research also focusses on extending the above application for earthquake prediction. 
                                <br/>
                                
                            </p>
                        </div>
                    </div>
                </div>
                <div className='timeline-div'>
                    <h2 className='about-skills-header'>
                            Education
                    </h2>
                    <div className='timeline-vertical-div'>
                        <Timeline lineColor={'#ddd'}>
                            <TimelineItem
                                key="001"
                                dateText="2019 – present"
                                style={{ color: '#e86971'}}
                                bodyContainerStyle={{
                                background: '#ddd',
                                padding: '20px',
                                borderRadius: '8px',
                                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                                }}>
                            <h3 style={{ paddingBottom:'5px' }}>Nanyang Technological University</h3>
                                <h4>BSc(hons) Data Science and Artificial Intelligence</h4>
                                {/* <p>
                                    I chose this course in order to equip myself with important skills to solve real
                                    world problems by making sense of the vast volumes of data available as part of 
                                    the developing global landscape. 
                                    
                                </p> */}
                            </TimelineItem>
                            <TimelineItem
                                key="002"
                                dateText="2007 – 2019"
                                dateInnerStyle={{ background: '#5C6581', color: '#FFFFFF' }}
                                bodyContainerStyle={{
                                background: '#ddd',
                                padding: '20px',
                                borderRadius: '8px',
                                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                                }}>
                                {/* <h3 style={{ color: '#61b8ff' }}>D.A.V Sr. Sec. School</h3>
                                <h4 style={{ color: '#61b8ff' }}>High School Diploma</h4> */}
                                <h3 style={{ paddingBottom:'5px' }}>D.A.V Sr. Sec. School</h3>
                                <h4>High School Diploma</h4>
                                {/* <p>
                                    Majored in Science with elective focus in engineering graphics(EG). 
                                </p> */}
                            </TimelineItem>
                        </Timeline>
                    </div>
                </div>
                <div className='about-skills1'>
                    <h2 className='about-skills-header'>
                        Programming Skills
                    </h2>
                    <div className='about-skills-icon'>
                        <SkillIcon IconLink={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"} Skill={"Python"} IconPackage={"devicon"}/>
                        <SkillIcon IconLink={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"} Skill={"MySQL"} IconPackage={"devicon"}/>
                        <SkillIcon IconLink={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"} Skill={"Java"} IconPackage={"devicon"}/>
                        <SkillIcon IconLink={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"} Skill={"C"} IconPackage={"devicon"}/>
                        <SkillIcon IconLink={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"} Skill={"C++"} IconPackage={"devicon"}/>
                        <SkillIcon IconLink={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} Skill={"React"} IconPackage={"devicon"}/>
                        <SkillIcon IconLink={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"} Skill={"Javascript"} IconPackage={"devicon"}/>
                        <SkillIcon IconLink={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"} Skill={"CSS"} IconPackage={"devicon"}/>
                        <SkillIcon IconLink={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg"} Skill={"R"} IconPackage={"devicon"}/>
                        <SkillIcon IconLink={<SiApachespark size="100" color='orange'/>} Skill={"PySpark"} IconPackage={"react-icons"}/>
                        <SkillIcon IconLink={<FcStatistics size="100" />} Skill={"Statistics"} IconPackage={"react-icons"}/>
                    </div>
                </div>
                <div className='about-skills2'>
                    <h2 className='about-skills-header'>
                        Platforms and Tools
                    </h2>
                    <div className='about-skills-icon'>
                        <SkillIcon IconLink={<SiDatabricks size="100" color='red'/>} Skill={"Databricks"} IconPackage={"react-icons"}/>
                        <SkillIcon IconLink={<SiMicrosoftazure size="100" color='#357EC7'/>} Skill={"Azure"} IconPackage={"react-icons"}/>
                        <SkillIcon IconLink={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"} Skill={"MongoDB"} IconPackage={"devicon"}/>
                        <SkillIcon IconLink={<DiDjango size="100" color="#006400"/>} Skill={"Django"} IconPackage={"react-icons"}/>
                        <SkillIcon IconLink={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"} Skill={"Git"} IconPackage={"devicon"}/>
                        <SkillIcon IconLink={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"} Skill={"Pandas"} IconPackage={"devicon"}/>
                        <SkillIcon IconLink={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"} Skill={"Numpy"} IconPackage={"devicon"}/>
                        <SkillIcon IconLink={<SiScikitlearn size="100" color='orange'/>} Skill={"Scikit-learn"} IconPackage={"react-icons"}/>
                        <SkillIcon IconLink={<SiPytorch size="100" color="ED7014"/>} Skill={"Pytorch"} IconPackage={"react-icons"}/>
                        <SkillIcon IconLink={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"} Skill={"Tensorflow"} IconPackage={"devicon"}/>
                        <SkillIcon IconLink={<SiKeras size="100" color='red'/>} Skill={"Keras"} IconPackage={"react-icons"}/>
                        <SkillIcon IconLink={<SiOpencv size="100" />} Skill={"OpenCV"} IconPackage={"react-icons"}/>
                    </div>
                </div>
                <div className='contact-icons'>
                    <h2 className='about-skills-header'>
                        Contact Me!
                    </h2>
                    <div className='about-contact-icon'>
                        <div className='about-contact-text'>
                            <p className='about-text-content'>
                                Feel free to get in touch with me. I am always interested to know more about you. 
                            </p>
                            <div className="about-contact-text-div">
                                <BsTelephone style={{height: '10%', width: '10%', fill: '#00A6FF'}}/>
                                <div className='about-contact-text-subdiv'>
                                    <p className="about-contact-p">
                                        Contact:  
                                    </p>
                                    <h3 className="about-contact-h3"> 
                                        +65 85755238 
                                    </h3>
                                </div>
                            </div>
                            <div className="about-contact-text-div">
                                <FiMail style={{height: '20%', width: '11%', color: '#00A6FF'}}/>
                                <div className='about-contact-text-subdiv'>
                                    <p className="about-contact-p">
                                        Email:  
                                    </p>
                                    <h3 className="about-contact-h3"> 
                                        vaidyanathanabhishek@gmail.com
                                    </h3>
                                </div>
                            </div>
                            <div className="about-contact-text-div">
                                <BsMap style={{height: '12%', width: '10%', fill: '#00A6FF'}}/>
                                <div className='about-contact-text-subdiv'>
                                    <p className="about-contact-p">
                                        Location:    
                                    </p>
                                    <h3 className="about-contact-h3"> 
                                        66 Nanyang Crecsent, Banyan Hall of Residence, #21B-06-258, Singapore 636960
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <form className="contact-form">
                            <div className='contact-form-info'>
                                <div className="contact-form-name-info">
                                    <input type="text" placeholder = 'Name' onChange = {handleNameChange} className="contact-form-text" />
                                </div>
                                <div className="contact-form-email-info">
                                    <input type="email" placeholder = 'Email' onChange = {handleEmailChange} className="contact-form-text" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className="contact-form-subject-info">
                                    <input type="text" placeholder = 'Subject' onChange = {handleSubjectChange} className="contact-form-text" />
                            </div>
                            <div className='contact-form-message'>
                                <div className="contact-form-message-text">
                                    <textarea placeholder = 'Message' onChange = {handleMessageChange} className="contact-form-text" rows="5"></textarea>
                                </div>
                            </div>
                            {/* <button type="submit" className="btn btn-primary">Send Message</button> */}
                            <button type="button" onClick={handleSendEmail} className="contact-form-button">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
              </div>
          </div>
    );
  }

  export default About;