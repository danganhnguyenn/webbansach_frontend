import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import List from "../product/List.tsx";

function HomePage() {
  return (
      <>
          <div className="w-full">
              <Banner/>
          </div>
          <div>
              <Carousel/>
          </div>
          <List/>
      </>
  );
}

export default HomePage;