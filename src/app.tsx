import * as React from "react";
import * as ReactDOM from "react-dom";

import Application from "./Application";

ReactDOM.render(
  React.createElement(Application, {}, null),
  document.getElementById("app")
);