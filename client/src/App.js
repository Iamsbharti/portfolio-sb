import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
