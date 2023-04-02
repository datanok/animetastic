import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/pages/Search";
import Home from "./components/pages/Home";
import Details from "./components/pages/Deatils";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/search/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
