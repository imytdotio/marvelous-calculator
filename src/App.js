import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DateCalculator } from "./Calculators/DateCalculator";
import { Home } from "./Pages/Home";
import { HealthCalculator } from "./Calculators/HealthCalculator";
import { Changelog } from "./Pages/Changelog";
import { Nav } from "./Components/Nav";
function App() {
  return (
    <div className="App m-8">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/date" exact>
            <DateCalculator />
          </Route>
          <Route path="/health" exact>
            <HealthCalculator />
          </Route>
          <Route path="/changelog" exact>
            <Changelog />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
