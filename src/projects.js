import React,{useState,useEffect} from 'react';
import LoadingIcons from 'react-loading-icons'
import ProjectCards from "./projectCards";
// import jsonData from "./new-scraped-projects.json";
import jsonData from "./scraped-projects.json";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const Projects = () =>{

  const [inputText, setinputText] = useState("")
  const [loaded, setloaded] = useState(false)
  const [selectedValue, setselectedValue] = useState("")
  const [projectJson, setprojectJson] = useState(jsonData)
  const [filterValue, setfilterValue] = useState("name")
  var uniqueTags = []
  const dum_dum_list = []


  const handleChange = (e) => {
    setinputText(e.target.value)
  }

  const handleSelection = (e) => {
    setselectedValue(e.target.value)
    if(e.target.value == "Title/Desc"){
      setfilterValue("name")
    }
    else if(e.target.value == "Skill"){
      setfilterValue("languages")
    }
  }

  useEffect(() => {
    console.log(selectedValue)
    setloaded(true)
  })

  const handleOnSearch = (string, results) => {
    console.log(results)
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
    console.log(string.length)
    if(string.length<=1){
      console.log(string.length<=1)
      setprojectJson(jsonData)
    }
  }

  const handleOnHover = (result) => {
    console.log(result)
  }

  const handleOnSelect = (item) => {
    console.log(item)
    dum_dum_list.push(item)
    setprojectJson(dum_dum_list)
  }

  const handleOnFocus = () => {
    console.log('Focused')
    if(selectedValue=="Skill"){
      uniqueTags = []
      projectJson.map(projects=>{
        if(uniqueTags.indexOf(projects.languages)===1){
          uniqueTags.push(projects.languages)
        }
      })
      var uniqueTagsnew = [];
      uniqueTagsnew = (uniqueTags).map((tags)=>(
        {"languages":tags}))
      if(uniqueTagsnew!=[]){
        setprojectJson(uniqueTagsnew)}
    }
  }

  const handleOnClear = () => {
    setprojectJson(jsonData)
  }

  const formatResult = (item) => {
    return item
  }

  if(!loaded){
      return(
          <div className='loader'>
              <LoadingIcons.TailSpin className='loader-symbol'/>
          </div>
      )
  }

  return(
    <div className='project-main-div'>
      <p className='heading-p'>
          {/* <pre className="page-title">
            >>
          </pre>
          <pre className="page-title">
            projects
          </pre> */}
          -Project
       </p>
      <div className='projects-main'>
        <div className='search-div'>
          <div className='reactsearchautocomplete'>
            <ReactSearchAutocomplete
              items={jsonData}
              onSearch={handleOnSearch}
              onHover={handleOnHover}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              onClear={handleOnClear}
              autoFocus
              placeholder = "Search..."
              formatResult={formatResult}
              class = "reactsearchautocomplete"
              styling = {{borderRadius:"0px"}}
              fuseOptions={{ keys: [filterValue] }}
              resultStringKeyName={filterValue}
            />
          </div>
        </div>
        {projectJson.map(projectData=>(
          <div className='projects-external' key={projectData.name}>
            {projectData.visibility=="Public" ? 
            <ProjectCards Description={"Project Description"} projectData={projectData}/>:null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;