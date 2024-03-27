import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import { Home } from "./Home";
import { Lasagna } from "./pages/Lasagna";
import { ItalianChickenSoup } from "./pages/ItalianChickenSoup";
import { PastaWithPeas } from "./pages/PastaWithPeas";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lasagna" element={<Lasagna />} />
          <Route path="/italianChickenSoup" element={<ItalianChickenSoup />} />
          <Route path="/pastaWithPeas" element={<PastaWithPeas />} />
          <Route path="*" element={<h1>404 PAGE NOT FOUND</h1>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
