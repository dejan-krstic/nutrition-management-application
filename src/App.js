// This is a class-based component because the current version of hot reloading won't hot reload a stateless component at the top-level.
import { hot } from "react-hot-loader";
import Navigation from "./components/Navigation";
import MealPlan from "./containers/pages/MealPlan";
import MyRecipes from "./containers/pages/MyRecipes";
import Groceries from "./containers/pages/Groceries";
import ShoppingList from "./containers/pages/ShoppingList";
import { Switch, Route, Redirect } from "react-router-dom";
import "antd/dist/antd.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <MyRecipes />
            </Route>
            <Route path="/meal-plan" exact>
              <MealPlan />
            </Route>
            <Route path="/groceries" exact>
              <Groceries />
            </Route>
            <Route path="/shopping-list" exact>
              <ShoppingList />
            </Route>
            <Route path="/meal-plan" exact>
              <MealPlan />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </>
    );
  }
}

export default hot(module)(App);
