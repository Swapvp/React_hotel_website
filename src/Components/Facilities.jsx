import locationImg from "../assets/location.png";
import exploreImg from "../assets/explore.png";
import customerServiceImg from "../assets/customerService.png";
import bedImg from "../assets/bed.png";
import knifeFrokImg from "../assets/knifeFrok.png";
import seaterSofaImg from "../assets/seaterSofa.png";
import showerImg from "../assets/shower.png";
import tableEtiquetteImg from "../assets/tableEtiquette.png";

export default function Facilities() {
  return (
    <>
      <section>
        <h1 className="text-center facility-title">Facilities</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 facility-content-container bgBlack  p-5 text-center">
              <img src={locationImg} alt="" />
              <h3 className="text-center">Location</h3>
              <p className="text-center">
                All of our hotels are located right in the heart of the city,
                minutes away from the railway station, and close to tourist and
                business hubs.
              </p>
            </div>
            <div className="col-md-3 facility-content-container bgGreen p-5 text-center">
              <img src={bedImg} alt="" />
              <h3 className="text-center">Comfortable cloud bed</h3>
              <p className="text-center">
                Have a good night's sleep on our super comfortable 5 star cloud
                beds
              </p>
            </div>
            <div className="col-md-3 facility-content-container bgYellow p-5 text-center">
              <img src={showerImg} alt="" />
              <h3 className="text-center ">Rain shower</h3>
              <p className="text-center">
                Start your day with a long hot powerful shower. In all our
                bathrooms you’ll find Rain showers head that you will love.
              </p>
            </div>
            <div className="col-md-3 facility-content-container bgOrange p-5 text-center">
              <img src={knifeFrokImg} alt="" />
              <h3 className="text-center">lavish breakfast buffet</h3>
              <p className="text-center">
                Start your day with a wholesome meal. Wide spread, and great
                taste.
              </p>
            </div>

            <div className="col-md-3 facility-content-container bgOrange p-5 text-center">
              <img src={tableEtiquetteImg} alt="" />
              <h3 className="text-center">In-room dining</h3>
              <p className="text-center">
                Enjoy your meals in bed with our in-room dining facility
              </p>
            </div>
            <div className="col-md-3 facility-content-container bgYellow p-5 text-center">
              <img src={seaterSofaImg} alt="" />
              <h3 className="text-center">warm & cozy lounge</h3>
              <p className="text-center">
                Relax/ work/ interact at our feel-good lounge cum lobby area.
              </p>
            </div>
            <div className="col-md-3 facility-content-container bgBlack p-5 text-center">
              <img src={customerServiceImg} alt="" />
              <h3 className="text-center">Complimentary Services</h3>
              <ul>
                <li>high-speed Wifi 24*7,</li>
                <li>packaged drinking water,</li>
                <li>tea/coffee amenities,</li>
                <li>dental kit/shaving kit,</li>
                <li>buffet breakfast,</li>
                <li>daily newspaper</li>
              </ul>
            </div>
            <div className="col-md-3 facility-content-container bgGreen p-5 text-center">
              <img src={exploreImg} alt="" />
              <h3 className="text-center">Explore</h3>
              <p className="text-center">
                Take advantage of our superb location. Explore, the heart of
                city with having to travel the extra mile.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
