import AvailableProducts from "./components/available/AvailableProducts";
import Favourites from "./components/favourite/Favourites";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import Slider from "./components/slider/Slider";
import TrendingProducts from "./components/trending/TrendingProducts";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />

      <Slider />
      <Favourites />
      <TrendingProducts />
      <Products />
      <AvailableProducts />
      <Footer />
    </div>
  );
};

export default App;
