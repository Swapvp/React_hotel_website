import direct from "../assets/direct.png";

export default function GetInTouch() {
  return (
    <>
      <section className="bgSec py-3">
        <h2 className="text-center gitTitle">GET IN TOUCH</h2>
        <h5 className="text-center gitSubTitle mb-5">
          We'd love to hear from you
        </h5>
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-5 bgYellow">
              <p>For Bookings Contact:</p>
              <div>
                <p className="fw-bolder">Indore</p>
                <p>8982741630</p>
                <p>7898409682</p>
              </div>
              <div>
                <p className="fw-bolder">Indore</p>
                <p>8982741630</p>
                <p>7898409682</p>
              </div>
              <div>
                <p className="fw-bolder">Indore</p>
                <p>8982741630</p>
                <p>7898409682</p>
              </div>
            </div>
            <div className="col-md-4 p-5 bgOrange">
              <img src={direct} alt="" className="directIcon" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
