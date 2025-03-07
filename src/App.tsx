import logo from "./logo.svg";
import "./App.css";
import Application from "./Components/Application/Application";
import Skills from "./Components/Skills/Skills";
import Counter from "./Components/Counter/Counter";
import Typography from "./Components/ThemeComponent/Typography";
import { AppProvider } from "./Components/Providers/AppProvider";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Application />
        <Skills
          skills={["Next.js", "React.js", "Node.js", "Express", "MongoDB"]}
        />
        <Counter />
        <Typography />
      </div>
    </AppProvider>
  );
}

export default App;
