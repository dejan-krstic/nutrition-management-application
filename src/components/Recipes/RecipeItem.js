import { Card, Col, Carousel } from "antd";
import Meta from "antd/lib/card/Meta";
import { recipeInfoText } from "./helpers";
import { DoubleRightOutlined, SmileOutlined } from "@ant-design/icons";

import "./RecipeItem.scss";

const RecipeItem = (props) => {
  const renderFooter = () =>
    props.enjoyMessage ? (
      <div style={{ fontSize: "20px" }}>
        {props.enjoyMessage} <SmileOutlined style={{ fontSize: "20px" }} />
      </div>
    ) : (
      <div
        style={{ fontSize: "16px" }}
        onClick={() =>
          props.showRecipeModalHandler
            ? props.showRecipeModalHandler(props)
            : null
        }
      >
        {recipeInfoText(props.category, props.numberOfServings)}{" "}
        <DoubleRightOutlined style={{ fontSize: "12px" }} />
      </div>
    );

  return (
    <>
      <Col xs={24} md={12} xl={8}>
        <div
          onClick={() =>
            props.addMealModalHandler ? props.addMealModalHandler(props) : null
          }
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
            <Meta title={props.title} description={props.description} />
          </Card>
        </div>
      </Col>
    </>
  );
};
export default RecipeItem;
