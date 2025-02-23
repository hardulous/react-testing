import { SkillsProps } from "./Skills.types"

const Skills = (props: SkillsProps) => {
  return (
    <>
     <ul>
       {props.skills.map((skill)=>{
        return <li key={skill}>{skill}</li>
       })}
     </ul>
    </>
  )
}

export default Skills