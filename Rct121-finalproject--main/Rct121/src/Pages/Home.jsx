import React from "react";
import Footer from "../Component/Footer/Footer";
import InsideContent from "../Component/Home/InsideContent";
import Navbar from "../Component/Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <InsideContent />
      <Footer />
    </div>
  );
}

export default Home;
