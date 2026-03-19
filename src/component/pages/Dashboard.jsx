import React, { useEffect, useState } from "react";
import appwriteService from "../../appwrite/config";

function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((res) => {
      if (res) {
        //sort posts by latest
        const sortedPosts = res.documents.sort(
          (a, b) => new Date(b.$createdAt) - new Date(a.$createdAt)
        );

        setPosts(sortedPosts);
      }
    });
  }, []);

  const totalPosts = posts.length;
  const totalLikes = posts.reduce((acc, post) => acc + (post.likes || 0), 0);

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6 text-center">
        📊 Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* TOTAL POSTS */}
        <div className="bg-blue-500 text-white p-6 rounded-xl shadow">
          <h2 className="text-xl">Total Posts</h2>
          <p className="text-3xl font-bold">{totalPosts}</p>
        </div>

        {/* TOTAL LIKES */}
        <div className="bg-pink-500 text-white p-6 rounded-xl shadow">
          <h2 className="text-xl">Total Likes</h2>
          <p className="text-3xl font-bold">{totalLikes}</p>
        </div>

        {/* LATEST POST */}
        <div className="bg-green-500 text-white p-6 rounded-xl shadow">
          <h2 className="text-xl">Latest Post</h2>
          <p className="text-lg">
            {posts[0]?.title || "No posts"}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;