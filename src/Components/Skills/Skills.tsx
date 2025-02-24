import { useState } from "react";
import { SkillsProps } from "./Skills.types";

const Skills = (props: SkillsProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <ul>
        {props.skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};

export default Skills;
