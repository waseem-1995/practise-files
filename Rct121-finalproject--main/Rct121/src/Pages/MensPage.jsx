import React from "react";
import Brandfilter from "../Component/filters/brand/Brandfilter";
import Card from "../Component/cards/Card";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
function MensPage() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex",borderBottom:"2px solid grey",overflowX:"none"  }} >
        <Brandfilter />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default MensPage;
