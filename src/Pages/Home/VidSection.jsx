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
          <h2>Yazeed Memorial Academy</h2>
          <p>
            A certified institution offering quality primary and secondary
            education, focused on academic excellence, character development,
            and holistic growth
          </p>
          <button>Apply Now</button>
        </div>
      </div>
    </>
  );
}
