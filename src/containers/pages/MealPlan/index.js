import { Col, Row, Spin } from "antd";
import WhatToEatDayList from "../../../components/WhatToEat/WhatToEatDayList";
import { connect } from "react-redux";
import {
  mealPlanSelector,
  recipesSelector,
  areLoadedMealsSelector,
  areLoadedRecipesSelector,
  isLoadingRecipesSelector,
  isLoadingMealsSelector,
  mealsSelector,
} from "../../../selectors";
import { choseMealOnDate, getRecipes, getMeals } from "../../../actions";
import WhatToEatModal from "../../../components/WhatToEat/WhatToEatModal";
import { useEffect, useState } from "react";

const MealPlan = (props) => {
  const [showModal, showWhatToEatModal] = useState(false);
  const [mealData, setMealData] = useState({});

  const showWhatToEatModalHandler = (meal) => {
    setMealData(meal);
    showWhatToEatModal(true);
  };

  const closeWhatToEatModalHandler = () => showWhatToEatModal(false);

  const handleChoose = (id) => {
    props.choseMealOnDate(props.meals, mealData.date, mealData.type, id);
    closeWhatToEatModalHandler();
  };

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

  return (
    <>
      <WhatToEatModal
        visible={showModal}
        handleChose={handleChoose}
        handleClose={closeWhatToEatModalHandler}
        items={props.recipes.filter((r) => r.category === mealData.type)}
      />
      <Row justify="center">
        <Col xs={23} sm={22} md={21} xl={20} xxl={17}>
          {props.isLoadingRecipes || props.isLoadingMeals ? (
            <Row justify="center" style={{ marginTop: "30vh" }}>
              <Spin size="large" />
            </Row>
          ) : (
            <WhatToEatDayList
              {...props}
              addMealModalHandler={showWhatToEatModalHandler}
            />
          )}
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => ({
  mealPlan: mealPlanSelector(state),
  meals: mealsSelector(state),
  recipes: recipesSelector(state),
  isLoadingRecipes: isLoadingRecipesSelector(state),
  isLoadingMeals: isLoadingMealsSelector(state),
  recipesLoaded: areLoadedRecipesSelector(state),
  mealsLoaded: areLoadedMealsSelector(state),
});

export default connect(mapStateToProps, {
  choseMealOnDate,
  getMeals,
  getRecipes,
})(MealPlan);
