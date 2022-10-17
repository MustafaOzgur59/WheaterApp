import { useContext } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Days from "./Components/Days";
import { DarkModeContext } from "./Context/DarkModeContext";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={`App h-full flex flex-col ${
        darkMode ? "text-white" : "text-black"
      } ${darkMode ? "bg-zinc-800" : "bg-gray-500"}`}
    >
      <Header />
      <Main />
      <Days />
    </div>
  );
}

export default App;
