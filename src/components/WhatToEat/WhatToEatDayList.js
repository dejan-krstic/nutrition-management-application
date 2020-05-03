import { Collapse, Row } from "antd";
import { DEFAULT_GUTTER } from "../../constants";
import RecipeItem from "../Recipes/RecipeItem";

const { Panel } = Collapse;

const WhatToEatDayList = (props) => {
  return (
    <Collapse accordion>
      {props.mealPlan.map((day) => (
        <Panel header={day.panelDate} key={day.id}>
          <Row gutter={[DEFAULT_GUTTER, DEFAULT_GUTTER]}>
            {day.recipes.map((recipe) => (
              <RecipeItem {...recipe} key={recipe.id} />
            ))}
          </Row>
        </Panel>
      ))}
    </Collapse>
  );
};

export default WhatToEatDayList;
