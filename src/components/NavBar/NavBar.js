import React, { useState } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

// Components
import SigninButton from "../Buttons/SigninButton";

// Stores
import authStore from "../../stores/authStore";
import shopStore from "../../stores/shopStore";

// Styles
import { TextStyled, NavBarStyle } from "./Styles";
import { FaSignOutAlt } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const shop = authStore.user
    ? shopStore.shops.find((shop) => shop.UserId === authStore.user.id)
    : [];

  return (
    <NavBarStyle>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img
            src="https://i.pinimg.com/originals/73/e5/59/73e559953a63012c1d68e3ca7d46ec2b.png"
            style={{
              position: "absolute",
              width: 55,
              height: 55,
              top: 15,
              marginBottom: 30,
              float: "left",
            }}
            alt="logo"
          />
          <i className="fal fa-utensils-alt" />
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* {authStore.user?.role === ("vendor" || "admin") && ( */}
          <li className="nav-item">
            <Link to="/shops" className="nav-links" onClick={closeMobileMenu}>
              All Restaurants
              <i className="far fa-utensils-alt" />
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/pastas" className="nav-links" onClick={closeMobileMenu}>
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about-us"
              className="nav-links"
              onClick={closeMobileMenu}
              onMouseOver="Hello"
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>

          {authStore.user ? (
            <>
              {shop && (
                <li className="nav-item">
                  <Link
                    to={`/shops/${shop.slug}`}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    My Restaurant
                    <i className="far fa-utensils-alt" />
                  </Link>
                </li>
              )}
              <TextStyled>
                Hello, {authStore.user.username}
                <FaSignOutAlt
                  onClick={authStore.signout}
                  style={{
                    color: "#830B27",
                    marginLeft: 10,
                    cursor: "pointer",
                  }}
                />
              </TextStyled>
            </>
          ) : (
            <li>
              <Link to="/signup" onClick={closeMobileMenu}>
                <SigninButton />
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </NavBarStyle>
  );
}

export default observer(Navbar);
