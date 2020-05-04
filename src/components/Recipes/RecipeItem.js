import { Card, Col, Carousel } from "antd";
import Meta from "antd/lib/card/Meta";
import { recipeInfoText } from "./helpers";
import { DoubleRightOutlined, SmileOutlined } from "@ant-design/icons";

import "./RecipeItem.scss";
import Title from "antd/lib/typography/Title";

const RecipeItem = (props) => {
  const renderFooter = () =>
    props.isDummy ? (
      <div style={{ fontSize: "22px" }}>
        {props.enjoyMessage} <SmileOutlined style={{ fontSize: "20px" }} />
      </div>
    ) : (
      <div
        style={{ fontSize: "22px" }}
        onClick={() =>
          props.showRecipeModalHandler
            ? props.showRecipeModalHandler(props)
            : null
        }
      >
        {recipeInfoText(props.category, props.numberOfServings)}{" "}
        <DoubleRightOutlined style={{ fontSize: "16px" }} />
      </div>
    );

  const onClickHandler = () => {
    if (props.chooseMealHandler) {
      return props.chooseMealHandler(props.id);
    }
    if (props.addMealModalHandler) {
      return props.addMealModalHandler({
        date: props.date,
        type: props.category,
      });
    }
    return () => {};
  };

  return (
    <>
      <Col xs={24} md={12} xl={8} stile={{ margin: "0 auto" }}>
        <div
          onClick={() => onClickHandler()}
          className={props.showRecipeModalHandler ? "" : "cursor-pointer"}
        >
          <Card
            cover={
              <Carousel style={{ height: "300px" }}>
                {props.images.map((imageSrc, index) => (
                  <div key={index} className="recipe-item-image-container">
                    <img
                      src={imageSrc}
                      alt={props.title}
                      style={{
                        margin: "0 auto",
                        height: "300px",
                      }}
                    />
                  </div>
                ))}
              </Carousel>
            }
            actions={[renderFooter()]}
          >
            <Meta
              title={<Title level={4}>{props.title}</Title>}
              description={props.description}
            />
          </Card>
        </div>
      </Col>
    </>
  );
};
export default RecipeItem;
