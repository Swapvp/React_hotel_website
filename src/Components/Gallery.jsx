import jaipurBanner from "../assets/JaipurBanner.webp";
import indoreBanner from "../assets/indoreBanner.jpg";
import maduraiBanner from "../assets/maduraiBanner.jpeg";

export default function Gallery() {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={jaipurBanner} class="d-block w-100" alt="jaipur" />
          </div>
          <div class="carousel-item">
            <img src={indoreBanner} class="d-block w-100" alt="indore" />
          </div>
          <div class="carousel-item">
            <img src={maduraiBanner} class="d-block w-100" alt="madurai" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
