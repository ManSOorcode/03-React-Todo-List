import React, { useContext, useRef, useState } from "react";
import ContentContext from "../../store/contex-intial";
import Input from "./Input";

// import { GrCut } from "react-icons/gr";
// import { MdDelete } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";

const TodoForm = (props) => {
  const ctx = useContext(ContentContext);

  console.log(ctx.editValue);

  //   const editContentValue = ctx.changeRef;
  let contentRef = useRef();

  // const [editState, setEditState] = useState(ctx.editValue.name);

  // let editRef = useRef(ctx.editValue.name);

  //   const nameHandler = (e) => {
  //     setstate(e.target.value);
  //   };

  const addNameHandler = (e) => {
    e.preventDefault();
    // console.log(contentValue.current.value);
    ctx.add({
      name: contentRef.current.value,
      id: Math.random(),
      //   id:Date.now(),
    });
    contentRef.current.value = "";
  };

  if (!ctx.stateValue) {
    // setEditState(ctx.editValue.name);
    contentRef.current.value = ctx.editValue[0].name;
    console.log(ctx.editValue[0].name);
  }

  const editNameHandler = (e) => {
    // console.log(e.target.value);
    // console.log(editRef.current.value);
    e.preventDefault();
    console.log("lol");
    console.log(contentRef.current.value, ctx.editValue[0].id);
    ctx.rAdd({
      name: contentRef.current.value,
      id: ctx.editValue[0].id,
    });
    ctx.stateFunction(false);
    // ctx.reAssign({

    // })
  };

  //   console.log(ctx.editValue[0].id);

  //   console.log(console.log(ctx.contentItem));

  //   console.log(props);
  return ctx.stateValue === true ? (
    <form onSubmit={addNameHandler}>
      <Input
        ref={contentRef}
        input={{
          //   name: props.simple[0].name,
          type: "text",
          //   value: "",
        }}
      />

      <button className="px-4 py-2 bg-slate-600">+</button>
    </form>
  ) : (
    <form onSubmit={editNameHandler}>
      <Input
        ref={contentRef}
        // ref={ctx.usingRef}
        // value={editState}
        input={{
          //   name: props.simple[0].name,
          type: "text",
          //   value: ctx.editValue,
        }}
      />

      <button className="px-4 py-2 bg-slate-600">
        <BiEditAlt />
      </button>
    </form>
  );
};

export default TodoForm;
