import { BrowserRouter, Switch, Route } from "react-router-dom";

// PAGES
import Main from "./pages/Main";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;