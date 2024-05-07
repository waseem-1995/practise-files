import React from "react";
import { useDispatch } from "react-redux";
import { inc_count, inc_count_fail, inc_count_req } from "../../../Redux/actionTypes";
import axios from "axios";

const ShoeCard = ({ item,getdata }) => {
      const dispatch = useDispatch();
      const shoeId = item.id;
      const handlecount = (num)=> {
        axios.patch(`http://localhost:8080/shoes/${shoeId}`,{cart_quantity : item.cart_quantity+num})
        .then((res)=> dispatch(inc_count_req()))
        .then(()=> getdata())
        .then(()=> dispatch(inc_count()))
        .catch((error)=> dispatch(inc_count_fail(error)));
      }
      return (
            <div key={item.id} data-cy={`shoe-card-wrapper-${shoeId}`}>
                  <img
                        data-cy="shoe-card-image"
                        alt="shoe"
                        src={item.image}
                        style={{ width: "100%" }}
                  />
                  <div>
                        <div data-cy="shoe-name">{item.name}</div>
                        <div>
                              In Cart:
                              <div data-cy="shoe-count">
                                    {item.cart_quantity}
                              </div>
                              <button
                                    data-cy="increment-shoe-count-button"
                                    onClick={() => handlecount(1)}
                              >
                                    +
                              </button>
                              <button
                                    data-cy="decrement-shoe-count-button"
                                    onClick={() => handlecount(-1)}
                              >
                                    -
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default ShoeCard;
