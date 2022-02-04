import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

const aboutUsData = [
  {
    name: "Jenny Schutzman",
    city: "Charleston",
  },
];

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/aboutus"
          render={() => <AboutUs data={aboutUsData} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
