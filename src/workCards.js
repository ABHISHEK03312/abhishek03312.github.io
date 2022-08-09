import React from 'react';
import './css-styles.css';
import ubisoftlogo from "./images/ubisoft-logo.jpeg";
import astarlogo from "./images/Astar-logo.jpeg";
import keppellogo from "./images/Keppel-logo.png";
import {MdOutlineReadMore} from"react-icons/md";

const WorkCards = ({jobData, handleClose})  => {

    if(jobData.image_path=="./images/Keppel-logo.png"){
        jobData.image_path = keppellogo
    }
    else if(jobData.image_path=="./images/ubisoft-logo.jpeg"){
        jobData.image_path = ubisoftlogo
    }
    else if(jobData.image_path=="./images/Astar-logo.jpeg"){
        jobData.image_path = astarlogo
    }
    return (
        <div className='workcards-main'>
            <div className='wordcards-main-sub'>
                <div className='workcards-img-container'>
                    <img src = {jobData.image_path} alt="workcardsimage" className="workcards-img" />
                </div>
                <div className='workcards-content'>
                    <div className='wordcards-sub-content'>
                        <h3 className='workcards-content-h3'>
                            {jobData.company_name}
                        </h3>
                        <h4 className='workcards-content-h4'>
                            {jobData.job_title}
                        </h4>
                        <p className='workcards-content-para'>
                            {jobData.date}
                        </p>
                    </div>
                    <button className='details-button' 
                    onClick={()=>handleClose(jobData)}
                    > <MdOutlineReadMore style={{ height: 25, width: 25, verticalAlign: 'middle', color:'#00A6FF'}}/></button>
                </div>
            </div>
        </div>
    )
}

export default WorkCards;