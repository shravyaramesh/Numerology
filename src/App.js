// @ts-nocheck
import "./App.css";
import { DestinyCard, LifePathCard } from "./components/index.js";

function App() {
  return (
    <div className="app-container">
      <LifePathCard />
      <DestinyCard />
    </div>
  );
}

export default App;
