import * as React from "react";

const List = ({
  items,
  itemComponents,
  component: Component = "div",
  itemKey = "id",
}: any) => {
  return (
    <Component>
      {items.map((item) => {
        return React.cloneElement(itemComponents, {
          ...item,
          key: item[itemKey],
        });
      })}
    </Component>
  );
};
export default List;
