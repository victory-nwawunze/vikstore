import Favourites from "./components/favourite/Favourites";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";
import TrendingProducts from "./components/trending/TrendingProducts";

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Favourites />
      <TrendingProducts />
    </div>
  );
};

export default App;
