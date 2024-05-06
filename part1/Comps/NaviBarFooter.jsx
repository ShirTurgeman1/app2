import { CiCirclePlus } from "react-icons/ci";
import { PiListHeartThin } from "react-icons/pi";
import { BiCloset } from "react-icons/bi";
import { IoIosColorWand } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";

import '../src/CSSc/NaviBarFooter.css'

export default function NaviBarFooter() {
  return (
    <div className="footer">
      <div className="footer-container">
        <a>
          <CiCirclePlus />
        </a>
        <a>
          <PiListHeartThin />
        </a>
        <a>
          <BiCloset />
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
