import jaipur from "../assets/jaipur.webp";
import indore from "../assets/indore.webp";
import madurai from "../assets/madurai.jpg";

import "./styles.css";

export default function Locations() {
  const citiesData = [
    {
      name: "Jaipur",
      images: jaipur,
      contactNumber: "123-456-7890",
    },
    {
      name: "Indore",
      images: indore,
      contactNumber: "987-654-3210",
    },
    {
      name: "Madurai",
      images: madurai,
      contactNumber: "555-555-5555",
    },
  ];
  return (
    <>
      <section className="py-4">
        <h2 className="text-center title mb-5">Locations</h2>
        <div className="container-fluid">
          <div className="row">
            {citiesData.map((item) => (
              <div className="col-md-4">
                <h2 className="text-center text-bg-success py-3   ">
                  {item.name}
                </h2>
                <div className="img-container">
                  <img src={item.images} alt="" className="w-100" />
                </div>
                <p className="text-center text-bg-info py-2">
                  {item.contactNumber}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
