import WorkCards from "./workCards";
import Popup from "./popup"
import React,{useState,useEffect} from 'react';
import LoadingIcons from 'react-loading-icons';
// import jsonData from "./scrapedjobsList.json";
// "job_desc": "\u2022 Liaised with auditors to develop and manage big data pipelines using necessary ETL procedures to meet Audit use cases.\n                \u2022 Worked on multiple business use-cases and deployed the relevant processes for continuous assessment by the organization.\n                \u2022 Graph Analysis \u2013 Spearheaded the development of a Graph database and analyzed possible relationships between various bidders in tender bidding processes in China. Possible scaling to multiple other use case using similar techniques.\n                \u2022 Risk and Assurance - Developed a robust system to analyze the risk faced by the organization due to sanctions imposed. Proposed and implemented methods such as NER to extract all possible individuals and organizations sanctioned from text documents.\n                \u2022 Financial Analytics - Collaborated with auditors to flag out invoice exceptions, identify third party vendors as well as ensure control and assurance within the organization.\n                \u2022 Streamlined scripts to be handle more than 50k records with 100+ fields. Improved efficiency by reducing time taken to process by almost 1/4th of original time taken.\n                \u2022 Developed interactive and dynamic dashboards using PowerBI to share meaningful actionable insights.\n                \u2022 Platforms and tools \u2013 Databricks, Spark, Azure Delta Lake, Cosmos DB, Gremlin API, BERT, pdfplumber, Camelot.",
// import jsonData from "./new-scraped-jobs.json";
import jsonData from "./scraped-jobs.json";

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