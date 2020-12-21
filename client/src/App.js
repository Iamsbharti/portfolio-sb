import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/projects" exact component={ProjectList} />
      </Switch>
    </div>
  );
}

export default App;
