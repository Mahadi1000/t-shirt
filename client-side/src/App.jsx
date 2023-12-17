import Home from "./Pages/Home/Home"
import Canvas from "../src/Canvas/Canvas"
import Customizer from "./Pages/Customizer/Customizer";
const App = () => {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer></Customizer>
    </main>
  );
}

export default App
