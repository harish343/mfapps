import React, { useState, useEffect } from 'react';

function User() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await response.json();
      console.log(jsonData)
      setPosts(jsonData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div className="App">
      <h1>Posts from JSONPlaceholder API</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            
          </li>
        ))}
      
      </ul>
    </div>
  );
}

export default User;