import { Col, Row } from "antd";
import WhatToEatDayList from "../../../components/WhatToEat/WhatToEatDayList";
import { connect } from "react-redux";
import { mealPlanSelector } from "../../../selectors";

const MealPlan = (props) => {
  return (
    <Row>
      <Col xs={1} md={4} />
      <Col xs={22} md={16}>
        <WhatToEatDayList {...props} />
      </Col>
      <Col xs={1} md={4} />
    </Row>
  );
};

const mapStateToProps = (state) => ({
  mealPlan: mealPlanSelector(state),
});

export default connect(mapStateToProps)(MealPlan);
