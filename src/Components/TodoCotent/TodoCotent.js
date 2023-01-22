import React, { useContext } from "react";
import { GrCut } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";

import ContentContext from "../../store/contex-intial";

const TodoCotent = () => {
  const context = useContext(ContentContext);
  // const contentValue = useRef();

  // context.contentValue.current.value = context.editValue;
  //   ctx.usingRef.current.value = ctx.editValue;
  // console.log(contentValue);
  //   console.log(ctx.editValue);

  //   console.log(context);

  const contentDeletHandler = (id) => {
    // console.log(id);
    // console.log(context);
    context.delet(id);
    // context.usingRef.current.value = "";
  };

  const contentEditHandler = (id) => {
    context.edit(id);
    context.stateFunction(false);
    // state.changeRef = contentItem[0].name;
    // console.log(context.usingRef.value);
    // console.log(context.editValue);
  };

  //   console.log(context);

  return (
    <React.Fragment>
      {context.contents.map((content) => {
        // console.log(content.id);
        return (
          <div key={content.id} className="flex w-1/2 m-4 text-xl bg-slate-500">
            <div>{content.name}</div>
            {/* {context.stateValue && ( */}
            <div>
              <button onClick={contentEditHandler.bind(null, content.id)}>
                <BiEditAlt />
              </button>
              <button onClick={contentDeletHandler.bind(null, content.id)}>
                <MdDelete />
              </button>
              <button>
                <GrCut />
              </button>
            </div>
            {/* )} */}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default TodoCotent;
