import "./styles.css";

export default function Banner() {
  const bannerContent = [
    "COSMOPOLITAN HOTELS",
    "Step into a world of comfort..",
  ];
  return (
    <div className="container-fluid banner-bg my-2">
      <div className="bg-overlay gx-0">
        <div className="banner-content-container">
          {bannerContent.map((item) => (
            <p key={item} className="text-black text-center p-3 banner-content">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
