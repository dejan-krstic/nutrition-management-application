import { Col, Row } from "antd";
import { connect } from "react-redux";
import { groceriesSelector } from "../../../selectors";
import ItemList from "../../../components/ItemList";
import { GROCERIES } from "../../../constants";
import { setNewAmount } from "../../../actions";
import { useCallback } from "react";

const Groceries = (props) => {
  const handleAmountChange = useCallback(
    (name, value) => {
      props.setNewAmount(name, value);
    },
    [props.setNewAmount],
  );

  return (
    <Row justify="space-around">
      <Col xs={22} sm={20} md={16} lg={12} xl={10} xxl={7}>
        <ItemList
          {...props}
          header={GROCERIES}
          handleAmountChange={handleAmountChange}
        />
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  items: groceriesSelector(state),
});

export default connect(mapStateToProps, { setNewAmount })(Groceries);
