import React from "react";
function DealOftheDayCard(props) {
  const { url } = props;
  return (
    <>
      <div>
        <img src={url} style={{ width: "100%" }} alt="noimg" />
      </div>
    </>
  );
}

export default DealOftheDayCard;
