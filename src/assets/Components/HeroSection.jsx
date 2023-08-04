import React from "react";
import styles from "../Style/HeroSection.module.css";
import { NavLink } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <div className={`container ${styles.heroSection}`}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={styles.heroText}>
              <p>weellcome to easy shopping</p>
              <h1>shop as you wish</h1>
              <h2>50% Off</h2>
              <NavLink to="/shop">
                <button className="btn btn-outline-dark rounded-0">
                  Shop Now
                </button>
              </NavLink>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <img
                className="img-fluid"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&usqp=CAU"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
