import "./App.css";
import { HeaderSection } from "./components/HeaderSection";
import { MainSection } from "./components/MainSection";
import { TodoProvider } from "./context/TodoProvider";
function App() {
  return (
    <>
      <TodoProvider>
        <HeaderSection />
        <MainSection />
      </TodoProvider>
    </>
  );
}

export default App;
