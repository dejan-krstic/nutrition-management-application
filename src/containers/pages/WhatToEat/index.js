import React from "react";

import RecipeList from "../../../components/Recipes/RecipeList";
import { Col, Row } from "antd";
import { multiplyRecipes } from "../../../constants";

const WhatToEat = () => {
  return (
    <Row>
      <Col xs={1} md={4} />
      <Col xs={22} md={16}>
        <RecipeList items={multiplyRecipes(25)} />
      </Col>
      <Col xs={1} md={4} />
    </Row>
  );
};

export default WhatToEat;
