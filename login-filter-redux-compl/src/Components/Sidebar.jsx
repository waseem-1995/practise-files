import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [searchParams, setSearchparams] = useSearchParams();
  const initialState = searchParams.getAll("category");
  const initialOrder = searchParams.get("order");
  // const initialOrder = searchParams.getAll("order");
  const [category, setCategory] = useState(initialState || []);
  // const [order, setOrder] = useState(initialOrder[0] || "");
  const [order, setOrder] = useState(initialOrder || "");
  const handleChange = (e) => {
    let newCat = [...category];
    let value = e.target.value;
    if (newCat.includes(value)) {
      newCat.splice(newCat.indexOf(value), 1);
    } else {
      newCat.push(value);
    }
    setCategory(newCat);
  };
  useEffect(() => {
    let params = {
      category,
    };
    order && (params.order = order);
    setSearchparams(params);
  }, [category, order]);
  // console.group(category);
  const handleSort = (e) => {
    const value = e.target.value;
    console.log(initialOrder);
    value === initialOrder ? setOrder(null) : setOrder(value);
    // setOrder(e.target.value);
  };
  // console.log(order);
  return (
    <div>
      <h1>Filter By</h1>
      <input
        type="checkbox"
        onChange={handleChange}
        value="male"
        checked={category.includes("male")}
      />
      <label>Men</label> <br />
      <input
        type="checkbox"
        onChange={handleChange}
        value="female"
        checked={category.includes("female")}
      />
      <label>Women</label> <br />
      <input
        type="checkbox"
        onChange={handleChange}
        value="kids"
        checked={category.includes("kids")}
      />
      <label>Kids</label>
      <hr />
      <div onChange={handleSort}>
        <h1>Sort by price</h1>
        <input
          type="checkbox"
          name="order"
          value={"asc"}
          defaultChecked={order === "asc"}
        />
        <label>Ascending</label>
        <input
          type="checkbox"
          name="order"
          value={"desc"}
          defaultChecked={order === "desc"}
        />
        <label>Descending</label>
      </div>
    </div>
  );
};

export default Sidebar;
