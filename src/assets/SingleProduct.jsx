import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./Context/ProductContext";
import PageNevigation from "./Components/PageNevigation";

function SingleProduct() {
  const { productDitals, getSingleProduct } = useProductContext();
  const { id } = useParams();

  const { name, price, description, image, colors, size } =
    productDitals[0] || {};

  useEffect(() => {
    getSingleProduct(parseInt(id));
  }, [id, getSingleProduct]);

  return (
    <div style={{ marginTop: "5rem" }}>
      <PageNevigation item={name} />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={image} alt="product_image" />
          </div>

          <div className="col-lg-6">
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p>description{description}</p>
            {/* <p>{size.join("-")}</p> */}
            {/* <p>{colors.join("-")}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
