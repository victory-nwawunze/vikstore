import AvailableProducts from "./components/available/AvailableProducts";
import Favourites from "./components/favourite/Favourites";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import Slider from "./components/slider/Slider";
import TrendingProducts from "./components/trending/TrendingProducts";

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Favourites />
      <TrendingProducts />
      <AvailableProducts />
      {/* <Products /> */}
    </div>
  );
};

export default App;
