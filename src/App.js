import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";

import Home from "./pages/Home";
import Car from "./pages/Car";
import DetailCar from "./pages/DetailCar";

//props dan state adalah bagaimana caranya component react kita menghandle data
// erat kaitannya dengan data flow di component react kita

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/car">
          <Car />
        </Route>
        <Route path="/car/:id">
          <DetailCar />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
