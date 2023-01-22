import React, { useReducer, useState, useRef } from "react";
import ContentContext from "./contex-intial";

// import { GrCut } from "react-icons/gr";
// import { MdDelete } from "react-icons/md";
// import { BiEditAlt } from "react-icons/bi";

const defaultContentState = {
  contents: [],
  editValue: [{ id: 23, name: "nna" }],
};

const reducer = (state, action) => {
  let contentValue;
  let newContent;
  //   console.log(state.contents);
  if (action.type === "ADD") {
    // return state.content;
    // const newContent = [...state, action.content];
    newContent = [...state.contents, action.content];
    contentValue = [...state.editValue, action.content];
    // console.log(...state.editValue);

    // const newContent = state.contents.concat(action.content);
    // console.log(action.content, state);

    // console.log(newContent);

    // console.log(state.content);
    return { contents: newContent, editValue: contentValue };
  }
  if (action.type === "EDIT") {
    const contentItem = state.contents.filter(({ id }) => id === action.id);
    // console.log(contentItem);
    // console.log(newContent);
    // state.changeRef.concate contentItem[0].name;

    // console.log(state.usingRef);
    // console.log(state.editValue);
    // state.editValue = contentItem;

    // console.log(state.editValue);
    return {
      contents: state.contents,
      editValue: contentItem,
    };
    // return {
    //   contents: contentValue,
    //   editValue: contentItem,
    // };
  }

  if (action.type === "REASSIGNE") {
    const reassignData = state.contents.find(({ id, name }) => {
      if (id === action.content.id) {
        return name.replace(name, action.content.name);
      }
    });

    console.log([reassignData]);

    const newArr = state.contents.map(
      (obj) => [action.content].find((o) => o.id === obj.id) || obj
    );

    console.log(newArr);

    // const indexNumer = state.contents.indexOf()

    // state.contents.splice(1);
    console.log(action.content);
    // console.log(contents)
    // console.log(state.contents.indexOf(action.content.id));

    return {
      contents: newArr,
      editValue: newArr,
    };
  }

  if (action.type === "DELET") {
    // return state.id !== action.id ? action.content : state.content;
    // console.log(action.id, "lol");
    // console.log(state.id);

    const contentItems = state.contents.filter(({ id }) => id !== action.id);
    contentValue = contentItems;

    // console.log(state.id);
    // console.log(contentItems);

    return { contents: contentItems, editValue: contentValue };
    // const contentIndex = state.contents.findIndex((id) => id !== action.id);
    // const contentElemnt = state.contents[contentIndex];

    // console.log(contentElemnt);
  }

  return defaultContentState;
};

// console.log(defaultContentState);

function ContexProvider(props) {
  const [submitState, setToggalSubmit] = useState(true);

  const [contentState, dispatch] = useReducer(reducer, defaultContentState);

  // const contentRef = useRef();

  //   const [contentState, dispatch] = useReducer(reducer, []);

  //   console.log(state);

  const editContentHandler = (id) => {
    dispatch({
      type: "EDIT",
      id: id,
    });
  };

  const deletContentHandler = (id) => {
    dispatch({
      type: "DELET",
      id: id,
    });
  };

  const addedContentHandler = (content) => {
    dispatch({
      type: "ADD",
      content: content,
    });
  };

  const reAssignHandler = (content) => {
    dispatch({
      type: "REASSIGNE",
      content: content,
    });
  };

  const setToggalSubmitFun = (condition) => {
    setToggalSubmit(condition);
  };

  const contentContext = {
    contents: contentState.contents,
    editValue: contentState.editValue,
    add: addedContentHandler,
    edit: editContentHandler,
    delet: deletContentHandler,
    rAdd: reAssignHandler,
    stateValue: submitState,
    // usingRef: contentRef,
    changeRef: [],
    stateFunction: setToggalSubmitFun,
  };
  return (
    <ContentContext.Provider value={contentContext}>
      {props.children}
    </ContentContext.Provider>
  );
}

export default ContexProvider;
