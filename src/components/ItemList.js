import { List, Typography } from "antd";
import { getSingleIngredientText } from "./Recipes/helpers";

const ItemsList = (props) => {
  return (
    <List
      header={<div style={{ fontWeight: "bolder" }}>{props.header}</div>}
      bordered
      dataSource={props.items}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text>
            {getSingleIngredientText(item).charAt(0).toLocaleUpperCase() +
              getSingleIngredientText(item).slice(1)}
          </Typography.Text>
        </List.Item>
      )}
    ></List>
  );
};

export default ItemsList;
