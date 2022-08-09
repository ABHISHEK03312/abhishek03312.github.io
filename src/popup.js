import { VscOrganization } from 'react-icons/vsc';
import { BiGitBranch } from 'react-icons/bi';
import { MdWork } from 'react-icons/md';
import { FaBusinessTime } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Popup = ({handleOpen,jobData}) => {
    console.log(jobData.job_desc.split("\n")[1])
    const content_list = []
    for(var i=0;i<jobData.job_desc.split("\n").length;i++){
        content_list.push(<p className='popup-para'>
        {jobData.job_desc.split("\n")[i]}
        </p>)}
    return(
        <div className="work-main-popup">
            <div className="popup-main-header">
                <p className="popup-heading">
                    {jobData.job_type}
                </p>
                <div className="popup-main-sub-header">
                <div className="popup-header">
                    <p className="popup-h4">
                        <VscOrganization style={{ height: 25, width: 25, verticalAlign: 'middle', color:'rgb(255, 255, 255)',padding:'5px'}}/>
                        <p className='popup-h4-sub'>
                            Company:
                        </p>
                        {jobData.company_name}
                    </p>
                    <p className="popup-h4">
                        <BiGitBranch style={{ height: 25, width: 25, verticalAlign: 'middle', color:'rgb(255, 255, 255)',padding:'5px'}}/>
                        <p className='popup-h4-sub'>
                            Department:
                        </p>
                        {jobData.department_name}
                    </p>
                    <p className="popup-h4">
                        <MdWork style={{ height: 25, width: 25, verticalAlign: 'middle', color:'rgb(255, 255, 255)',padding:'5px'}}/>
                        <p className='popup-h4-sub'>
                            Job title:
                        </p>
                        {jobData.job_title}
                    </p>
                    <p className="popup-h4">
                        <FaBusinessTime style={{ height: 25, width: 25, verticalAlign: 'middle', color:'rgb(255, 255, 255)',padding:'5px'}}/>
                        <p className='popup-h4-sub'>
                            Duration:
                        </p>
                        {jobData.date}
                    </p>
                </div>
                <button className='details-button-close'
                    onClick={handleOpen}>
                    <AiOutlineCloseCircle style={{ height: 25, width: 25, verticalAlign: 'middle', color:'rgb(255, 255, 255)'}}/>
                </button>
                </div>
            </div>
            {/* <div>
                <p className="popup-details-heading">
                        Details
                </p>
            </div> */}
            <div className="popup-content">
                <p className="popup-details-heading">
                        Details
                </p>
                {content_list}
                <div className="popup-padding">
                </div>
            </div>
        </div> 
    )
}

export default Popup;