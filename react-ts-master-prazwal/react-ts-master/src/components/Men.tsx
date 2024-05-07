import axios from "axios";

type Props = {
  data: {
    _id: string;
    title: string;
    cost: number;
    new: boolean;
    qty: number;
    imgUrl: string;
    category: string;
    rating: number;
  };
};

const Men = (props: Props) => {
  const addToWishlist = (movieData: Props): void => {
    axios
      .post("http://localhost:8000/wishlist", movieData.data)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
      }}
    >
      <h1>{props.data.title}</h1>
      <h1>{props.data.category}</h1>
      <img src={props.data.imgUrl} style={{ height: "200px" }} alt="" />
      <button onClick={() => addToWishlist(props)}>Add to wishlist 💝</button>
    </div>
  );
};

export default Men;
