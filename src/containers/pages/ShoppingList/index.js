import { Col, Row, Typography, Slider, InputNumber, Spin } from "antd";
import { connect } from "react-redux";
import {
  shoppingListSelector,
  daysToProvideSelector,
  isLoadingGroceriesSelector,
  areLoadedGroceriesSelector,
  isLoadingRecipesSelector,
  areLoadedRecipesSelector,
  areLoadedMealsSelector,
  isLoadingMealsSelector,
} from "../../../selectors";
import ItemList from "../../../components/ItemList";
import { SHOPPING_LIST } from "../../../constants";
import { useCallback, useEffect } from "react";
import {
  setDaysToProvide,
  getRecipes,
  getMeals,
  getGroceries,
} from "../../../actions";

const ShoppingList = (props) => {
  const handleChangeDaysToProvide = useCallback(
    (daysToProvide) => {
      props.setDaysToProvide(daysToProvide);
    },
    [setDaysToProvide],
  );

  useEffect(() => {
    if (!props.isLoadingRecipes && !props.recipesLoaded) {
      props.getRecipes();
    }
  }, [props.isLoadingRecipes, props.recipesLoaded]);

  useEffect(() => {
    if (!props.isLoadingMeals && !props.mealsLoaded) {
      props.getMeals();
    }
  }, [props.isLoadingMeals, props.mealsLoaded]);
  useEffect(() => {
    if (!props.isLoadingGroceries && !props.groceriesLoaded) {
      props.getGroceries();
    }
  }, [props.isLoadingGroceries, props.groceriesLoaded]);

  return (
    <Row justify="center">
      <Col xs={22} sm={20} md={16} lg={12} xl={10} xxl={7}>
        {props.isLoadingRecipes ||
        props.isLoadingGroceries ||
        props.isLoadingMeals ? (
          <Row justify="center" style={{ marginTop: "30vh" }}>
            <Spin size="large" />
          </Row>
        ) : (
          <>
            <Row justify="center">
              <Typography.Title
                level={4}
                style={{ textAlign: "center", color: "#666" }}
              >
                SET NUMBER OF DAYS TO PROVIDE FOR:
              </Typography.Title>
            </Row>
            <Row style={{ marginBottom: "1rem" }} justify="center">
              <Col xs={15} sm={17}>
                <Slider
                  min={1}
                  max={30}
                  onChange={handleChangeDaysToProvide}
                  value={
                    typeof props.daysToProvide === "number"
                      ? props.daysToProvide
                      : 1
                  }
                />
              </Col>
              <Col xs={2} sm={3}>
                <InputNumber
                  min={1}
                  max={30}
                  style={{ margin: "0 1rem", fontSize: "1.5rem" }}
                  value={props.daysToProvide}
                  onChange={handleChangeDaysToProvide}
                />
              </Col>
            </Row>
            <Row>
              <ItemList
                {...props}
                header={SHOPPING_LIST}
                style={{ width: "100%" }}
              />
            </Row>{" "}
          </>
        )}
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  items: shoppingListSelector(state),
  daysToProvide: daysToProvideSelector(state),
  isLoadingGroceries: isLoadingGroceriesSelector(state),
  groceriesLoaded: areLoadedGroceriesSelector(state),
  isLoadingRecipes: isLoadingRecipesSelector(state),
  recipesLoaded: areLoadedRecipesSelector(state),
  isLoadingMeals: isLoadingMealsSelector(state),
  mealsLoaded: areLoadedMealsSelector(state),
});

export default connect(mapStateToProps, {
  setDaysToProvide,
  getRecipes,
  getMeals,
  getGroceries,
})(ShoppingList);
