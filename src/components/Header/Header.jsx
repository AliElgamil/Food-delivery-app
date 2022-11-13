import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { auth } from "../../Firebase";
import { toggleCartVisible } from "../../store/UiVisible";
import "../../styles/header.css";
import Loading from "../Loading/Loading";
const nav_links = [
  {
    display: "home",
    path: "/home",
  },
  {
    display: "all foods",
    path: "/all-foods",
  },
  {
    display: "cart",
    path: "/cart",
  },
  // {
  //   display: "contact",
  //   path: "/contact",
  // },
];

export default function Header() {
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);
  const [fixedNav, setFixedNav] = useState(false);

  const { user } = useSelector((state) => state.user);
  const { totalQuantity } = useSelector((state) => state.cartItems);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) setFixedNav(true);
      else setFixedNav(false);
    });
  }, []);
  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  const toggleCartVisibleHandler = () => {
    dispatch(toggleCartVisible());
  };

  return (
    <>
      <Loading show={true} />
      <header className={`header ${fixedNav ? "fixed-top " : ""}`}>
        <Container>
          {/* ============= Logo ============= */}
          <nav className="nav__wrapper d-flex justify-content-between align-items-center">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h5>tasty treat</h5>
            </div>

            {/* ============= nav_links =============== */}
            <div
              className={`navigation ${showMenu ? "show-menu" : ""}`}
              onClick={showMenuHandler}
            >
              <div className="menu d-flex align-items-center gap-5">
                {nav_links.map((link, ind) => (
                  <NavLink to={link.path} key={ind}>
                    {link.display}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* ============ Right Navbar ============= */}
            <div className="navbar_right d-flex align-items-center gap-4">
              {/* ============= Cart icon ============= */}
              <span className="cart_icon" onClick={toggleCartVisibleHandler}>
                <i className="ri-shopping-basket-line"></i>
                {totalQuantity !== 0 && (
                  <span className="cart_badge">{totalQuantity}</span>
                )}
              </span>

              {/* ============= User ============= */}
              {user ? (
                <div className="userInfo position-relative">
                  <img src={user.photoURL} alt="user" />
                  <ul className="drop_down list-unstyled m-0">
                    <li>{user.displayName}</li>
                    <li className="logout_btn" onClick={() => auth.signOut()}>
                      Logout
                      <i className="ri-door-open-line"></i>
                    </li>
                  </ul>
                </div>
              ) : (
                <span className="user">
                  <Link to="/login">
                    <i className="ri-user-line"></i>
                  </Link>
                </span>
              )}

              {/* ============= Mobile Menu =============*/}
              <span
                className="mobile_menu d-block d-lg-none"
                onClick={showMenuHandler}
              >
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
}
