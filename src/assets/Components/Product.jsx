import React from "react";

import { useProductContext } from "../Context/ProductContext";

import styles from "../Style/Product.module.css";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatePrice";

function Product() {
  const { productsList } = useProductContext();

  return (
    <div>
      <div className="container">
        <div className="row">
          {productsList.map((curElem) => {
            const { id, image, name, price, description, offer, popularity } =
              curElem;
            return (
              <div className="col-lg-3 col-md-4 col-sm-6" key={curElem.id}>
                <div className={styles.productCard}>
                  <div className={styles.offer}>
                    <p>-{offer}%</p>
                    <p>{popularity}</p>
                  </div>
                  <img
                    className="img-fluid card-img-top"
                    src={image}
                    alt="product_img"
                  />
                  <div className={styles.productName}>
                    <h4>{name}</h4>
                    <div>
                      <p>{<FormatPrice price={price} />}</p>
                    </div>
                  </div>

                  <NavLink to={`/singleproductpage/${curElem.id}`}>
                    <p>{description.slice(0, 20)}</p>
                  </NavLink>

                  <button className="btn btn-success w-100 rounded-0">
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;
