import React from "react";

const ContentContext = React.createContext({
  contents: [],
  editValue: [],
  add: () => {},
  edit: () => {},
  delet: () => {},
  stateFunction: () => {},
  rAdd: () => {},
  stateValue: "",
});

export default ContentContext;
