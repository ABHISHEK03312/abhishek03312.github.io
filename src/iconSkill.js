const SkillIcon = ({IconLink,Skill,IconPackage}) => {
    if(IconPackage=="devicon"){
    return(
        <div className='about-skills-indv-icon'>
            <div className='about-img-icon-box'>
                <img src={IconLink} width={100} height={100} className='about-img-icon'/>
                <p>{Skill}</p>
            </div>
        </div>
    )}
    return(
        <div className='about-skills-indv-icon'>
            <div className='about-img-icon-box'>
            {IconLink}
            <p>{Skill}</p>
            </div>
        </div>
    )
}

export default SkillIcon;