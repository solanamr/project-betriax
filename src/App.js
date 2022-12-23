import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import DetailApi from "./components/DetailApi/DetailApi";
import DetailRandom from "./components/DetailRandom/DetailRandom";



function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<DetailApi />} />
        <Route path="/detail/ag" element={<DetailRandom />} />
        </Routes>
        </BrowserRouter>
  );
}

export default App;
