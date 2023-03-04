import React from "react";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Search from "./Components/Search/Search";
import Support from "./Components/Support/Support";
import Info from "./Components/Info/Info";
import Lounge from "./Components/Loungue/Lounge";
import Travelers from "./Components/Travelers/Travelers";
import Subscriber from "./Components/Subscriber/Subcriber";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscriber />
      <Footer />
    </div>
  );
};

export default App;
