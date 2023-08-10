import Favourites from "./components/favourite/Favourites";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Favourites />
    </div>
  );
};

export default App;
