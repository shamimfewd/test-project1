import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { LuShoppingBag } from "react-icons/lu";
import { BsHeart } from "react-icons/bs";
import { PiUserBold } from "react-icons/pi";
import styles from "../Style/TopNav.module.css";

function TopNav() {
  return (
    <>
      <Navbar expand="md" className="bg-body-tertiary fixed-top">
        <Container>
          <Navbar.Brand className={styles.logo} to="/">
            Easy Shopping
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`me-auto ${styles.navLInk}`}>
              <NavLink to="/" className={styles.navItem}>
                Home
              </NavLink>
              <NavLink to="/shop" className={styles.navItem}>
                Shop
              </NavLink>
              <NavLink to="/collection" className={styles.navItem}>
                Collcetion
              </NavLink>
              <NavLink to="/blogs" className={styles.navItem}>
                Blog
              </NavLink>
              <NavLink to="/contact" className={styles.navItem}>
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className={styles.navIconBox}>
          <NavLink className={styles.navIcon}>
            <LuShoppingBag />
            <span className={styles.ItemNumber}>0</span>
          </NavLink>
          <NavLink className={styles.navIcon}>
            <BsHeart />
            <span className={styles.wishList}>0</span>
          </NavLink>
          <NavLink className={styles.navIcon}>
            <PiUserBold />
          </NavLink>
        </div>
      </Navbar>
    </>
  );
}

export default TopNav;
