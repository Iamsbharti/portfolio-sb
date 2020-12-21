import { Route, Switch } from "react-router-dom";
import { Contact } from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Login from "./components/Management/Login";
import ProjectList from "./components/ProjectList";
import MainConsole from "./components/Management/MainConsole";
import ManageProjects from "./components/Management/ManageProjects";
import ManageBlogs from "./components/Management/ManageBlogs";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/projects" exact component={ProjectList} />
        <Route path="/contacts" exact component={Contact} />
        <Route path="/login" exact component={Login} />
        <Route path="/manage" exact component={MainConsole} />
        <Route path="/manage/projects" exact component={ManageProjects} />
        <Route path="/manage/blogs" exact component={ManageBlogs} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
