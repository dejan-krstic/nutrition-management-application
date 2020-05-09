// This is a class-based component because the current version of hot reloading won't hot reload a stateless component at the top-level.
import { hot } from "react-hot-loader";
import Navigation from "./components/Navigation";
import MealPlan from "./containers/pages/MealPlan";
import MyRecipes from "./containers/pages/MyRecipes";
import Groceries from "./containers/pages/Groceries";
import ShoppingList from "./containers/pages/ShoppingList";
import { Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";
import { FOOTER_MSG, NAVIGATION_LINKS } from "./constants";

const { Content, Footer } = Layout;

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Navigation />
        <Content className="site-layout" style={{ marginTop: 64 }}>
          <Switch>
            <Route path={NAVIGATION_LINKS.myRecipes.path} exact>
              <MyRecipes />
            </Route>
            <Route path={NAVIGATION_LINKS.mealPlan.path} exact>
              <MealPlan />
            </Route>
            <Route path={NAVIGATION_LINKS.groceries.path} xact>
              <Groceries />
            </Route>
            <Route path={NAVIGATION_LINKS.shoppingList.path} exact>
              <ShoppingList />
            </Route>
            <Route path={NAVIGATION_LINKS.myProfile.path} exact>
              <MealPlan />
            </Route>
            <Redirect to={NAVIGATION_LINKS.myRecipes.path} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>{FOOTER_MSG}</Footer>
      </Layout>
    );
  }
}

export default hot(module)(App);
