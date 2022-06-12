import React from "react";
import Card from "../UI/Card";
import classes from "./AddListItem.module.css";

const AddListItem = (props) => {
  return (
    <div>
      <Card className={classes.users}>
        <ul>
          {props.items.length === 0
            ? "No List Item "
            : props.items.map((item) => (
                <li key={item.id}>
                  {item.name} ({item.age} years old)
                </li>
              ))}
        </ul>
      </Card>
    </div>
  );
};

export default AddListItem;
