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
      <Col xs={22} sm={20} md={16} lg={12} xl={10} xxl={7}>
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
        </Row>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  items: shoppingListSelector(state),
  daysToProvide: daysToProvideSelector(state),
});

export default connect(mapStateToProps, { setDaysToProvide })(ShoppingList);
