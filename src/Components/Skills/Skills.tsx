import { useEffect, useState } from "react"
import { SkillsProps } from "./Skills.types"

const Skills = (props: SkillsProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Here mimicing the api call that is after 500ms the data will come and state will change
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoggedIn(true)
    },1001)
  },[])

  return (
    <>
    <h1 id="skill">Skills</h1>
     <ul>
       {props.skills.map((skill)=>{
        return <li key={skill}>{skill}</li>
       })}
     </ul>
     {
      isLoggedIn ? (
        <button>Start learning</button>
      )
      :
      (
        <button onClick={()=>setIsLoggedIn(true)}>Login</button>
      )
     }
    </>
  );
};

export default Skills;
