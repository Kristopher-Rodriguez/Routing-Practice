import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NumOrWord from "./components/NumOrWord";
import WordColor from "./components/WordColor";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:numWord" element={<NumOrWord />} />
          <Route
            path="/:word/:fontColor/:backgroundColor"
            element={<WordColor />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
