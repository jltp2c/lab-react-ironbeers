import "./App.css";
import { Route, Routes } from "react-router-dom";
import RandomBeer from "./pages/RandomBeer/RandomBeer";
import AllBeers from "./pages/AllBeers/AllBeers";
import NewBeer from "./pages/New-beer/NewBeer";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Beer from "./pages/OneBeer/Beer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Navbar />}>
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/beers" element={<AllBeers />} />
          <Route path="/new-beer" element={<NewBeer />} />
          <Route path="/beers/:beerId" element={<Beer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
