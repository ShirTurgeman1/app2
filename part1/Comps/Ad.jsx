import { useLocation } from "react-router-dom";

import Map from "./Map";
import NaviBarFooter from "./NaviBarFooter";
import "../src/CSSc/Ad.css";

export default function Ad() {
    // קבלת הפרמטרים מקומפוננטת CreateAd
  const location = useLocation();
  const { price, address, condition, photo, color, name, phone } = location.state;


  return (
    <>
      <div className="ad_container">
        <img src={photo} alt={photo} />
        <h3>{color.toUpperCase()} {name.toUpperCase()}</h3>
        <p>{price}$</p>
        <p>Condition: {condition}</p>
        <br />
        <p>{address}</p>
        <Map address={address}/> 
        <br />
        <p>Phone number: {phone}</p>
      </div>
      <NaviBarFooter />
    </>
  );
}
