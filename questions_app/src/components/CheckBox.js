import React, {Fragment} from "react";

function CheckBox(props) {
  return (
    <Fragment>
      <input id="checkbox" type={props.type}/>
      <label htmlFor="checkbox">{props.value}</label><br/>
    </Fragment>
  );
}

export default CheckBox;

