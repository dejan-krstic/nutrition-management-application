import { Col, Row } from "antd";
import WhatToEatDayList from "../../../components/WhatToEat/WhatToEatDayList";
import { connect } from "react-redux";
import { mealPlanSelector, recipesSelector } from "../../../selectors";
import { choseMealOnDate } from "../../../actions";
import WhatToEatModal from "../../../components/WhatToEat/WhatToEatModal";

const MealPlan = (props) => {
  const { useState } = React;
  const [showModal, showWhatToEatModal] = useState(false);
  const [mealData, setMealData] = useState({});

  const showWhatToEatModalHandler = (meal) => {
    setMealData(meal);
    showWhatToEatModal(true);
  };

  const closeWhatToEatModalHandler = () => showWhatToEatModal(false);

  const handleChoose = (id) => {
    props.choseMealOnDate(mealData.date, mealData.type, id);
    closeWhatToEatModalHandler();
  };

  return (
    <>
      <WhatToEatModal
        visible={showModal}
        handleChose={handleChoose}
        handleClose={closeWhatToEatModalHandler}
        items={props.recipes.filter((r) => r.category === mealData.type)}
      />
      <Row justify="center">
        <Col xs={22} md={16}>
          <WhatToEatDayList
            {...props}
            addMealModalHandler={showWhatToEatModalHandler}
          />
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => ({
  mealPlan: mealPlanSelector(state),
  recipes: recipesSelector(state),
});

export default connect(mapStateToProps, { choseMealOnDate })(MealPlan);
