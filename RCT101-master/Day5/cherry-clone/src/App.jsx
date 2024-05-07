import "./App.css";
import Filters from "./Components/Filters";
import Navbar from "./Components/Navbar";
import Offers from "./Components/Offers";
import Restaurants from "./Components/Restaurants";
import userInfo from "./data/userInfo.json"
import offers from "./data/offers.json"
import restaurants from "./data/restaurants.json";
import { useState } from "react";

const filters = {
  1:"Cost Low to High",
  2:"Cost High to Low",
  3:"Ratings",
  4:"Delivery Time",
  5:"Relevance"
}
function App() {

  const [FilterBy, setfilterBy] = useState("")
  const [Data, setData] = useState(restaurants)

  const updateFilter = (newFilter) => {
    switch(newFilter){
      case "1" : {
        setfilterBy(1)
        Data.sort((a,b) => (a.costOf2 - b.costOf2))
        setData([...Data])
        break;
      }
      case "2" : {
        setfilterBy(2)
        Data.sort((a,b) => (b.costOf2 - a.costOf2))
        setData([...Data])
        break;
      }
      case "3" : {
        setfilterBy(3)
        Data.sort((a,b) => (b.rating - a.rating))
        setData([...Data])
        break;
      }
      case "4" : {
        setfilterBy(4)
        Data.sort((a,b) => (a.deliveryTiming - b.deliveryTiming))
        setData([...Data])
        break;
      }
      case "5" : {
        setfilterBy(5)
        Data.sort((a,b) => (b.deliveryTiming - a.deliveryTiming))
        setData([...Data])
        break;
      }
      default:{
        setData(restaurants)
        break;
      }
    }
  }
  return (
    <div>
      <Navbar {...userInfo.location}/>
      <Offers offers={offers}/>
      <section className="near-you">
        <Filters filters={filters} updateFilter={updateFilter} currentFilterBy={FilterBy} />
        <Restaurants restaurants={Data} />
      </section>
    </div>
  );
}

export default App;
