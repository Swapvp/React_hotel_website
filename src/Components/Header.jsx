import logo from "../assets/hotelLogo.png";
import "./styles.css";

export default function Header() {
  const menuItem = [
    "Locations",
    "About Us",
    "Amenities",
    "Gallery",
    "Contact Us",
  ];

  return (
    <div className="container ">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navigation-container d-flex justify-content-center align-items-center mt-1">
        {menuItem.map((item) => (
          <div key={item} className="navigation-item">
            <p className="m-0">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
