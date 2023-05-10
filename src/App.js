import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/pages/Search";
import Home from "./components/pages/Home";
import Details from "./components/pages/Deatils";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Categories from "./components/pages/Categories";
import Genre from "./components/pages/Genre";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div className="App">
      <Navbar />

      <div class="flex flex-col min-h-screen">
        <main class="flex-grow">
          <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/animetastic" element={<Home />} />
            <Route path="/search" element={<Search />}></Route>
            <Route path="/search/:id" element={<Details />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/genre/:genre" element={<Genre />} />
          </Routes>
          </ScrollToTop>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
