import { Collapse, Row } from "antd";
import { DEFAULT_GUTTER } from "../../constants";
import RecipeItem from "../Recipes/RecipeItem";
import { CloseCircleTwoTone, CheckCircleTwoTone } from "@ant-design/icons";

const { Panel } = Collapse;

const WhatToEatDayList = (props) => {
  const generateCheckIcons = (recipes) =>
    recipes.map(({ isDummy }) =>
      isDummy ? (
        <CloseCircleTwoTone
          twoToneColor="red"
          style={{ fontSize: "2.3rem", margin: "0 0.5rem" }}
        />
      ) : (
        <CheckCircleTwoTone
          twoToneColor="#52c41a"
          style={{ fontSize: "2.3rem", margin: "0 0.5rem" }}
        />
      ),
    );

  return (
    <Collapse accordion>
      {props.mealPlan.map((day) => (
        <Panel
          header={<span style={{ fontSize: "1.5rem" }}>{day.panelDate}</span>}
          key={day.id}
          extra={generateCheckIcons(day.recipes)}
        >
          <Row gutter={[DEFAULT_GUTTER, DEFAULT_GUTTER]} justify="space-around">
            {day.recipes.map((recipe) => (
              <RecipeItem
                {...recipe}
                key={recipe.id}
                date={day.id}
                addMealModalHandler={props.addMealModalHandler}
              />
            ))}
          </Row>
        </Panel>
      ))}
    </Collapse>
  );
};

export default WhatToEatDayList;
