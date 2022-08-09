import WorkCards from "./workCards";
import Popup from "./popup"
import React,{useState,useEffect} from 'react';
import LoadingIcons from 'react-loading-icons';
// import jsonData from "./scrapedjobsList.json";
import jsonData from "./new-scraped-jobs.json";

const Work = () =>{
    const [loaded, setloaded] = useState(false)
    const [close, setclose] = useState(true)
    const [classname, setclassname] = useState("")
    const [hclassname, sethclassname] = useState("")
    const [jobID, setjobID] = useState(0)

    const handleOpen = () => {
      sethclassname("")
      setclassname("")
      setclose(true)
    }
  
    const handleClose = (jobid) => {
      sethclassname("heading-p-popup")
      setclassname("workcards-indv-popup")
      setclose(false)
      setjobID(jobid)
    }

      useEffect(() => {
        setloaded(true)
    },[close])

    if(!loaded){
        return(
            <div className='loader'>
                <LoadingIcons.TailSpin className='loader-symbol'/>
            </div>
        )
    }

    return(
      <div className="work-main-parent">
        <div className={hclassname}>
          <p className='heading-p'>
            -Work Experience
          </p>
        </div>
        <div className="work-main">
          {jsonData.map(jobData=>(
            <div className="workcards-indv" key={jobData.job_id}>
              {!close ?
              <Popup handleOpen={handleOpen} jobData={jobID}/>
              : null}
              <div className={classname}>
                <WorkCards jobData={jobData} handleClose={handleClose}/>  
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Work;