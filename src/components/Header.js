import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LOGO from "../images/logo.png";

function Header() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          alt="euphoria"
          src={LOGO}
          // src="https://thumbs.dreamstime.com/b/euphoria-logo-euphoria-lettering-logo-form-equalizer-101719724.jpg"
          // src="https://wherever-i-look.com/wp-content/uploads/2019/06/Title-Card-Euphoria-Season-1-Episode-1-Pilot-Series-Premiere.jpg"
        />
      </Link>
      {/* https://i.pinimg.com/originals/6a/57/ed/6a57ed3190e38f9ef5dc82a2454df0fc.jpg */}

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div>
        <div className="header__nav">
          <Link to="/login">
            <div className="header__option">
              <span className="nav_optionLineOne">Hello Guest !!</span>
              <span className="nav_optionLineTwo">Sign In</span>
            </div>
          </Link>
          <div className="header__option">
            <span className="nav_optionLineOne">Returns</span>
            <span className="nav_optionLineTwo">& Orders</span>
          </div>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingCartIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
