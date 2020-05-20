import { Col, Row, Spin } from "antd";
import { connect } from "react-redux";
import {
  groceriesSelector,
  isLoadingGroceriesSelector,
  areLoadedGroceriesSelector,
} from "../../../selectors";
import ItemList from "../../../components/ItemList";
import { GROCERIES } from "../../../constants";
import { setNewAmount, getGroceries } from "../../../actions";
import { useCallback, useEffect } from "react";

const Groceries = (props) => {
  const handleAmountChange = useCallback(
    (name, value) => {
      props.setNewAmount(name, value);
    },
    [props.setNewAmount],
  );

  useEffect(() => {
    if (!props.isLoadingGroceries && !props.groceriesLoaded) {
      props.getGroceries();
    }
  }, [props.isLoadingGroceries, props.groceriesLoaded]);

  return (
    <Row justify="space-around">
      <Col xs={22} sm={20} md={16} lg={12} xl={10} xxl={7}>
        {props.isLoadingGroceries ? (
          <Row justify="center" style={{ marginTop: "30vh" }}>
            <Spin size="large" />
          </Row>
        ) : (
          <ItemList
            {...props}
            header={GROCERIES}
            handleAmountChange={handleAmountChange}
          />
        )}
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  items: groceriesSelector(state),
  isLoadingGroceries: isLoadingGroceriesSelector(state),
  groceriesLoaded: areLoadedGroceriesSelector(state),
});
export default connect(mapStateToProps, { setNewAmount, getGroceries })(
  Groceries,
);
