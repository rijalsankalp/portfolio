import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        "https://www.googleapis.com/blogger/v3/blogs/BLOG_ID/posts?key=API_KEY"
      );
      const data = await response.json();
      setPosts(data.items);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <Head>
        <title>Sankalpa | ML-Enthusiast</title>
        <meta
          name="description"
          content="I'm a ML/AI enthusiast with occasional software developing experience."
        />
      </Head>
      <Navbar />
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        ))}
      </div>
      <Contact />
    </div>
  );
}
