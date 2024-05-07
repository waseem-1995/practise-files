import React from "react";

function BestMyntra(props) {
  const { url } = props;
  return (
    <>
      <div>
        <img src={url} style={{ width: "100%" }} alt="noimg" />
      </div>
    </>
  );
}

export default BestMyntra;
