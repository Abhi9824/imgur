import React, { useState } from "react";
import "./ExploreTags.css"; // custom styles

const ExploreTags = () => {
  const [showAll, setShowAll] = useState(false);

  const cards = [
    { id: 1, url: "1.jpg", name: "Water", posts: 521768 },
    { id: 2, url: "2.jpg", name: "Aww", posts: 345768 },
    { id: 3, url: "3.jpg", name: "Current Events", posts: 435768 },
    { id: 4, url: "4.jpg", name: "Anime", posts: 125768 },
    { id: 5, url: "5.jpg", name: "Wallpaper", posts: 571268 },
    { id: 6, url: "6.jpg", name: "Art", posts: 576834 },
    { id: 7, url: "7.jpg", name: "Pokemon", posts: 1200 },
    { id: 8, url: "4.jpg", name: "Baking", posts: 76834 },
  ];

  const visibleCards = showAll
    ? cards.slice(0, cards.length)
    : cards.slice(0, 6);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="px-4 topBackground">
      <h4 className="live-laugh-heading fs-3 text-center">Live, Laugh, Meme</h4>
      <div className="d-flex justify-content-between align-items-center">
        <p className="subtitle fs-5 mb-3 text-white">EXPLORE TAGS</p>
        <span className="more-tags fs-5">
          <button onClick={toggleShowAll}>
            {showAll ? "LESS TAGS -" : "MORE TAGS +"}
          </button>
        </span>
      </div>
      <div className="row mb-3">
        {visibleCards.map((card) => (
          <div className="col-6 col-md-4 col-lg-2 mb-4" key={card.id}>
            <div className="custom-card">
              <img src={card.url} alt={card.name} className="card-img" />
              <div className="card-overlay">
                <h6 className="card-title">{card.name}</h6>
                <p className="card-posts">
                  {card.posts.toLocaleString()} posts
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreTags;
