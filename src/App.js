import "./App.css";
import Palette from "./components/Palette";
import { seedColors } from "./assets/seedColors";

function App() {
  console.log(seedColors);

  return (
    <div>
      <Palette {...seedColors[2]} />
    </div>
  );
}

export default App;
