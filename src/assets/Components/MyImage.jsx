import React from "react";

function MyImage({ image }) {
  return (
    <div>
      {image.map((curElem, index) => {
        <img key={index} src={curElem.url} alt={curElem.id} />;
      })}
    </div>
  );
}

export default MyImage;
