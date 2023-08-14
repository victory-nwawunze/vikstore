import AvailableProducts from "./components/available/AvailableProducts";
import Favourites from "./components/favourite/Favourites";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import Slider from "./components/slider/Slider";
import TrendingProducts from "./components/trending/TrendingProducts";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./features/themeSlice";
import "./App.css";
import { FaSun } from "react-icons/fa";

const App = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();
  return (
    <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <FaSun
        className="FaIcon"
        onClick={() => dispatch(toggleTheme())}
        // style={{  }}
      />
      {/* <button>Toggle Effect</button> */}
      <Navbar />
      <Slider />

      {/* <button onClick={toggleTheme}>Toggle</button> * */}
      <Favourites />
      <TrendingProducts />
      <Products />
      <AvailableProducts />
      <Footer />
    </div>
  );
};

export default App;
