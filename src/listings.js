import React from "react";
import './listings.css';

function Listings() {
  return (
    <div className="container-wrapper">
      <h1 className="title">Price List 2024</h1>
      <div className="canva-embed">
        <iframe
          loading="lazy"
          className="canva-iframe"
          src="https://www.canva.com/design/DAGKnlHG9ZQ/AchHCi7KwMroYblfJ9apvA/view?embed"
          title="Car Listings"
          allowFullScreen
          allow="fullscreen"
        ></iframe>
      </div>
      <a
        href="https://www.canva.com/design/DAGKnlHG9ZQ/AchHCi7KwMroYblfJ9apvA/view?utm_content=DAGKnlHG9ZQ&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
    </div>
  );
}

export default Listings;