import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBestMyntra,
  getCategoriesData,
  getdealsArival,
  getDealsDay,
  getGiftCards,
  getNewBrands,
  getTopInInfluncer,
  getTopPicks
} from "../../redux/Home/actions";
import BestMyntra from "./BestMyntra";
import CategoriesBag from "./CategoriesBag";
import DealOftheDayCard from "./DealOftheDayCard";
import { SlideShow } from "./Sliding";
import TopPicks from "./TopPicks";
const divStyle = {
  textAlign: "start",
  letterSpacing: ".15em",
  textTransform: "uppercase",
  color: "#3e4152",
  fontSize: "1.8em",
  margin: " 50px 0 10px 30px",
  maxHeight: "5em",
  fontWeight: "500"
};
function InsideContent() {
  const dealsDay = useSelector((state) => state.home.dealsDay);
  const bestMyntra = useSelector((state) => state.home.bestMyntra);
  const topPicks = useSelector((state) => state.home.topPicks);
  const categoriesBag = useSelector((state) => state.home.categoriesBag);
  const giftCards = useSelector((state) => state.home.giftCards);
  const dealsarival = useSelector((state) => state.home.dealsarival);
  const newbrands = useSelector((state) => state.home.newbrands);
  const topinfluncer = useSelector((state) => state.home.topinfluncers);

  // console.log("data", dealsDay);
  const dispatch = useDispatch();
  useEffect(() => {
    axios({ url: "https://myntra-dataapi.onrender.com/dealsday", method: "GET" })
      .then((res) => res.data)
      .then((res) => dispatch(getDealsDay(res)))
      .catch((e) => console.log(e));
    axios({ url: "https://myntra-dataapi.onrender.com/bestMyntra", method: "GET" })
      .then((res) => res.data)
      .then((res) => dispatch(getBestMyntra(res)))
      .catch((e) => console.log(e));
    axios({ url: "https://myntra-dataapi.onrender.com/topPicks", method: "GET" })
      .then((res) => res.data)
      .then((res) => dispatch(getTopPicks(res)))
      .catch((e) => console.log(e));
    axios({ url: "https://myntra-dataapi.onrender.com/categoriesBag", method: "GET" })
      .then((res) => res.data)
      .then((res) => dispatch(getCategoriesData(res)))
      .catch((e) => console.log(e));
    axios({ url: "https://myntra-dataapi.onrender.com/GiftCards", method: "GET" })
      .then((res) => res.data)
      .then((res) => dispatch(getGiftCards(res)))
      .catch((e) => console.log(e));
    axios({ url: "https://myntra-dataapi.onrender.com/dealsArival", method: "GET" })
      .then((res) => res.data)
      .then((res) => dispatch(getdealsArival(res)))
      .catch((e) => console.log(e));
    axios({ url: "https://myntra-dataapi.onrender.com/newBrands", method: "GET" })
      .then((res) => res.data)
      .then((res) => dispatch(getNewBrands(res)))
      .catch((e) => console.log(e));
    axios({
      url: "https://myntra-dataapi.onrender.com/topStyles",
      method: "GET"
    })
      .then((res) => res.data)
      .then((res) => dispatch(getTopInInfluncer(res)))
      .catch((e) => console.log(e));
  }, [dispatch]);
  return (
    <div>
      <SlideShow />
      <div>
        <div style={divStyle}>
          {/* {" "} */}
          <h4>DEALS OF THE DAY</h4>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "space-between",
            gridTemplateColumns: "repeat(7, auto) "
          }}
        >
          {dealsDay.map((e) => (
            <DealOftheDayCard {...e} key={e.id} />
          ))}
        </div>
        <div style={divStyle}>
          {" "}
          <h4>BEST OF MYNTRA EXCLUSIVE BRANDS</h4>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "space-between",
            gridTemplateColumns: "repeat(8, auto) "
          }}
        >
          {bestMyntra.map((e) => (
            <BestMyntra {...e} key={e.id} />
          ))}
        </div>
        <div style={divStyle}>
          {" "}
          <h4>TOP PICKS</h4>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "space-between",
            gridTemplateColumns: "repeat(7, auto) "
          }}
        >
          {topPicks.map((e) => (
            <TopPicks {...e} key={e.id} />
          ))}
        </div>
        <div style={divStyle}>
          {" "}
          <h4>CATEGORIES TO BAG</h4>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "space-around",
            gridTemplateColumns: "repeat(8, auto) ",
            rowGap: "0px"
          }}
        >
          {categoriesBag.map((e) => (
            <CategoriesBag {...e} key={e.id} />
          ))}
        </div>
        <div style={divStyle}>
          {" "}
          <h4>GIFTING CARDS</h4>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "space-around",
            gridTemplateColumns: "repeat(5, auto) ",
            rowGap: "0px"
          }}
        >
          {giftCards.map((e) => (
            <CategoriesBag {...e} key={e.id} />
          ))}
        </div>
        <div style={divStyle}>
          {" "}
          <h4>TOP INFLUENCERS EXCLUSIVE STYLES</h4>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "space-around",
            gridTemplateColumns: "repeat(6, auto) ",
            rowGap: "0px"
          }}
        >
          {topinfluncer.map((e) => (
            <CategoriesBag {...e} key={e.id} />
          ))}
        </div>
        <div style={divStyle}>
          {" "}
          <h4>NEW IN TOP BRANDS</h4>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "space-around",
            gridTemplateColumns: "repeat(8, auto) ",
            rowGap: "0px"
          }}
        >
          {newbrands.map((e) => (
            <CategoriesBag {...e} key={e.id} />
          ))}
        </div>
        <div style={divStyle}>
          {" "}
          <h4>DEALS ON LATEST ARRIVALS</h4>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "space-around",
            gridTemplateColumns: "repeat(2, auto) ",
            rowGap: "0px"
          }}
        >
          {dealsarival.map((e) => (
            <CategoriesBag {...e} key={e.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InsideContent;
