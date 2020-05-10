import { Col, Row, Typography, Slider, InputNumber } from "antd";
import { connect } from "react-redux";
import {
  shoppingListSelector,
  daysToProvideSelector,
} from "../../../selectors";
import ItemList from "../../../components/ItemList";
import { SHOPPING_LIST } from "../../../constants";
import { useCallback } from "react";
import { setDaysToProvide } from "../../../actions";

const ShoppingList = (props) => {
  const handleChangeDaysToProvide = useCallback(
    (daysToProvide) => {
      props.setDaysToProvide(daysToProvide);
    },
    [setDaysToProvide],
  );

  return (
    <Row justify="center">
      <Col xs={22} md={6}>
        <Typography.Title
          level={4}
          style={{ textAlign: "center", color: "#666" }}
        >
          SET NUMBER OF DAYS TO PROVIDE:
        </Typography.Title>
        <Row style={{ marginBottom: "1rem" }}>
          <Col span={19}>
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
          <Col span={4}>
            <InputNumber
              min={1}
              max={30}
              style={{ margin: "0 1rem", fontSize: "1.5rem" }}
              value={props.daysToProvide}
              onChange={handleChangeDaysToProvide}
            />
          </Col>
        </Row>
        <ItemList {...props} header={SHOPPING_LIST} />
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  items: shoppingListSelector(state),
  daysToProvide: daysToProvideSelector(state),
});

export default connect(mapStateToProps, { setDaysToProvide })(ShoppingList);
