import Center from "./components/Center";
import Discover from "./components/Discover";
import Footer from "./components/Footer";
import Footers from "./components/Footers";
import Header from "./components/Header";
import Heading from "./components/Heading";
import Hero from "./components/Hero";
import Review from "./components/Review";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Heading />
        <Hero />
        <Center />
        <Discover />
        <Review />
        <Footer />
        <Footers />
      </div>
    </>
  );
};

export default App;
