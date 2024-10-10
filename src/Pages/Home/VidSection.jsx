import React from "react";

export default function VidSection() {
  return (
    <>
      <div className="vid-container">
        <div className="vid-content">
          <video autoPlay loop muted>
            <source
              src="https://yma.elscholar.ng/media/yma.mp4"
              type="video/mp4"
            />
          </video>
          <h2>Welcome to Our Grooming Institution</h2>
          <p>Discover our expertise in grooming, spa services, and more.</p>
          <button>Book Now</button>
        </div>
      </div>
    </>
  );
}
