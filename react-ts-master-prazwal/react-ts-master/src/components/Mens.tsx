import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Men from "./Men";

interface Mens {
  _id: string;
  title: string;
  cost: number;
  new: boolean;
  qty: number;
  imgUrl: string;
  category: string;
  rating: number;
}

const Mens = () => {
  const [mens, setMens] = useState<Mens[]>([]);

  const handleOnChange = (search: React.ChangeEvent<HTMLInputElement>): void => {
    searchByName(search.target.value);
  };

  const searchByName = (arg: string): void => {
    axios
      .get(`http://localhost:8080/mens?q=${arg}`)
      .then((res) => setMens(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/mens")
      .then((res) => setMens(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!mens) return <h1>Loading...</h1>;
  return (
    <>
      <input type="text" placeholder="Search" onChange={(e) => handleOnChange(e)} />
      <div
        style={{
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {mens.map((ele, ind) => (
          <Men data={ele} key={ind} />
        ))}
      </div>
    </>
  );
};

export default Mens;
