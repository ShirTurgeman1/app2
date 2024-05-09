import { BiCloset } from "react-icons/bi";
import { IoIosColorWand } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { PiHouseLineThin } from "react-icons/pi";

import "../src/CSSc/NaviBarFooter.css";

export default function NaviBarFooter() {
  return (
    <div className="footer">
      <div className="footer-container">
        <a>
          <GoPerson />
        </a>
        <a>
          <BiCloset />
        </a>
        <a>
          <PiHouseLineThin />
        </a>
        <a>
          <IoIosColorWand />
        </a>
        <a>
          <CiShoppingCart />
        </a>
      </div>
    </div>
  );
}
