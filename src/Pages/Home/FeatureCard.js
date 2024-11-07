import React from 'react'

export default function FeatureCard({
  icon,
  title,
  content,
  time,
}) {
  return (
    <div
      className="col-lg-3 col-md-6 col-sm-12 p-2 mb-4"
      data-aos={"fade-up"}
      data-aos-duration={`${time}`}
      data-aos-once="false"
    >
      <div class="feature-card text-center mb-50">
        <div class="feature-icon shadow">
          {icon}
        </div>
        <div class="feature-text">
          <h4>{title}</h4>
          <p>
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

