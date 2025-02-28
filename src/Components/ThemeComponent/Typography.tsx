import { useContext } from "react";
import { ThemeContext } from "../Providers/AppProvider";

const Typography = () => {
  const themeObj = useContext(ThemeContext);
  return (
    <div>
      <h1>Context Heading h1 {themeObj.palette.mode}</h1>
    </div>
  );
};

export default Typography;

// Here this component is using provider value so we need to test this component. 