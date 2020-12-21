import "./App.css";
import Home from "./pages/Home";
import User from "./pages/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/user/:username' component={User} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
