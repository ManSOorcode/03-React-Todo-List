import React, { useContext } from "react";
import ContentContext from "../../store/contex-intial";

const Button = () => {
  const context = useContext(ContentContext);

  const resethandler = () => {
    context.stateFunction(true);
    // context.usingRef = "";
  };
  return (
    <div>
      <button
        className="flex px-8 py-2 mx-auto mt-16 text-lg text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600"
        onClick={resethandler}
      >
        Button
      </button>
    </div>
  );
};

export default Button;
