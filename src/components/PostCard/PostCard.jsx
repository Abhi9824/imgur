import React from "react";
import "./PostCard.css";
import { FaHeart, FaCommentDots, FaEye } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}
const PostCard = () => {
  const originalPosts = [
    {
      id: 1,
      likes: 1234,
      comments: 87,
      views: 15023,
      image:
        "https://images.unsplash.com/photo-1742417596459-e62731b97eed?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    },
    {
      id: 2,
      likes: 842,
      comments: 45,
      views: 12004,
      image:
        "https://images.unsplash.com/photo-1726137569938-f080c8d9904e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      id: 3,
      likes: 1453,
      comments: 102,
      views: 18734,
      image:
        "https://images.unsplash.com/photo-1728519616666-d092572850f9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
    },
    {
      id: 4,
      likes: 234,
      comments: 18,
      views: 5023,
      image:
        "https://images.unsplash.com/photo-1742401571210-d24df76632b9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    },
    {
      id: 5,
      likes: 983,
      comments: 76,
      views: 11034,
      image:
        "https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
    },
    {
      id: 6,
      likes: 623,
      comments: 54,
      views: 9021,
      image:
        "https://images.unsplash.com/photo-1742218410244-6eb97a4a6229?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      likes: 1290,
      comments: 65,
      views: 14055,
      image:
        "https://plus.unsplash.com/premium_photo-1664302576182-1fc4aaa3da99?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
    },
    {
      id: 8,
      likes: 753,
      comments: 43,
      views: 8320,
      image:
        "https://images.unsplash.com/photo-1742505709433-9f9300e8b396?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      likes: 1670,
      comments: 112,
      views: 19482,
      image:
        "https://images.unsplash.com/photo-1742317402143-449e8b4cbf91?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      likes: 304,
      comments: 29,
      views: 6700,
      image:
        "https://images.unsplash.com/photo-1742435456486-3a0059c05e38?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 11,
      likes: 880,
      comments: 67,
      views: 10439,
      image:
        "https://plus.unsplash.com/premium_photo-1707944422438-e094d987feee?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 12,
      likes: 1324,
      comments: 74,
      views: 15001,
      image:
        "https://unsplash-assets.imgix.net/illustrations-module/2-col.png?auto=format",
    },
    {
      id: 13,
      likes: 540,
      comments: 34,
      views: 7800,
      image:
        "https://images.unsplash.com/photo-1742538703467-00cd49d8a8d4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 14,
      likes: 1101,
      comments: 59,
      views: 13450,
      image:
        "https://images.unsplash.com/photo-1725205637695-d5149ad91a17?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    },
    {
      id: 15,
      likes: 728,
      comments: 48,
      views: 9703,
      image:
        "https://images.unsplash.com/photo-1725205383326-9aba871a4419?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    },
    {
      id: 16,
      likes: 1600,
      comments: 91,
      views: 18300,
      image:
        "https://images.unsplash.com/photo-1742422055664-7a40f3f7db9a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const [posts, setPosts] = useState(originalPosts);
  const [displayCount, setDisplayCount] = useState(8);
  const [sortType, setSortType] = useState("viral");

  const handleSort = (type) => {
    const sorted = [...originalPosts].sort((a, b) => {
      return type === "viral" ? b.views - a.views : b.likes - a.likes;
    });
    setPosts(sorted);
    setSortType(type);
    setDisplayCount(8);
  };

  const loadMorePosts = () => {
    if (displayCount < posts.length) {
      setDisplayCount((prev) => Math.min(prev + 4, posts.length));
    }
  };

  // 👇 Throttled scroll event to load more posts
  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (scrollBottom) loadMorePosts();
    }, 500);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [displayCount, posts]);

  return (
    <div className="post-container py-4 px-3">
      {/* Sort Bar */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div className="d-flex gap-3">
          <button
            onClick={() => handleSort("viral")}
            className={`sort-btn ${sortType === "viral" ? "active" : ""}`}
          >
            Most Viral
          </button>
          <button
            onClick={() => handleSort("likes")}
            className={`sort-btn ${sortType === "likes" ? "active" : ""}`}
          >
            Most Liked
          </button>
        </div>
        <p className="text-muted m-0">Sort by: {sortType.toUpperCase()}</p>
      </div>

      <div className="row g-4">
        {posts.slice(0, displayCount).map((post) => (
          <div key={post.id} className="col-md-4 d-flex">
            <div className="card post-card h-100 w-100">
              <img
                src={post.image}
                className="card-img-top img-fluid post-img"
                alt="Post"
              />
              <div className="card-body d-flex justify-content-around">
                <div className="d-flex align-items-center gap-2">
                  <FaHeart className="text-danger" />
                  <span>{post.likes}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <FaCommentDots className="text-info" />
                  <span>{post.comments}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <FaEye className="text-secondary" />
                  <span>{post.views}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Message at end */}
      {displayCount >= posts.length && (
        <p className="text-center mt-4 text-muted">
          🎉 You’ve reached the end!
        </p>
      )}
    </div>
  );
};

export default PostCard;
