// import { SiTailwindcss } from "react-icons/si";
import TodoCotent from "./Components/TodoCotent/TodoCotent";
import TodoForm from "./Components/TodoForm/TodoForm";
import ContexProvider from "./store/ContexProvider";
import Button from "./Components/UI/Button";

const App = () => {
  //   const simple = [
  //     {
  //       id: 1,
  //       name: "mansoor",
  //     },
  //   ];
  return (
    // <main className="flex items-center justify-center h-screen">
    // 	<p className="p-2 text-2xl capitalize bg-red-300">
    // 		use this template for react practice with tailwind
    // 		<SiTailwindcss className="inline mx-1 text-cyan-500" />
    // 	</p>
    // </main>

    <ContexProvider>
      <div className="container px-5 py-24 mx-auto bg-gray-500">
        <div className="flex flex-col items-center justify-center ">
          <TodoForm />
          <TodoCotent />
        </div>
        <Button />
      </div>
    </ContexProvider>
  );
};

export default App;
