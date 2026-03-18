import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../";
import appwriteService from "../../appwrite/config";

function AllPosts() {

  const [posts, setPosts] = useState([]);

 
  const [search, setSearch] = useState("");

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  


    return (
  <div className="w-full py-8 bg-gray-50 min-h-screen">
    <Container>

      {/* 🔍 SEARCH BAR */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="🔍 Search posts..."
          className="w-full max-w-lg px-5 py-3 border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 🔥 EMPTY STATE */}
      {posts.length === 0 && (
        <h2 className="text-center text-gray-500 text-lg">
          No posts available 🚫
        </h2>
      )}

      {/* 🔥 NO SEARCH RESULT */}
      {posts.length > 0 &&
        posts.filter((post) =>
          post.title.toLowerCase().includes(search.toLowerCase())
        ).length === 0 && (
          <h2 className="text-center text-gray-500 text-lg">
            No matching results 😢
          </h2>
        )}

      {/* 🔥 MODERN GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

        {posts
          .filter((post) =>
            post.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((post) => (
            <div
              key={post.$id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 p-2"
            >
              <PostCard {...post} />
            </div>
          ))}

      </div>

    </Container>
  </div>
);
}

export default AllPosts;