import React, { useState, useEffect } from 'react';
import PostItem from './PostItemCH';

const ContentCH = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Assuming you are fetching posts from an API
    fetch('https://api.example.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data); // Set the fetched posts to the state
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []); // The empty dependency array ensures the effect runs only once after the initial render

  return (
    <div>
      <div className="css.TitleBar">
        <form>
          <label htmlFor="searchInput">Search:</label>
          <input
            type="text"
            id="searchInput"
            onChange={(e) => {
              const name = e.target.value.toLowerCase();
              const filteredPosts = posts.filter((post) =>
                post.name.toLowerCase().includes(name)
              );
              setPosts(filteredPosts);
            }}
          />
        </form>
        <PostItem posts={posts} />
        <p>{posts.length}</p>
      </div>
    </div>
  );
};

export default ContentCH;
