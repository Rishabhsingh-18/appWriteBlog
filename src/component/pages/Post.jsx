import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import appwriteService from "../../appwrite/config";
import { useSelector } from "react-redux";

function Post() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userdata);

  const [post, setPost] = useState(null);


  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((data) => {
        if (data) {
          setPost(data);
          setLikes(data.likes || 0);
        } else navigate("/");
      });
    }
  }, [slug, navigate]);

  
  const deletePost = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    try {
      const status = await appwriteService.deletePost(post.$id);

      if (status) {
        if (post.featuredImage) {
          await appwriteService.deleteFile(post.featuredImage);
        }

        alert("Post deleted successfully ✅");
        navigate("/all-posts");
      } else {
        alert("Delete failed ❌");
      }

    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  const isOwner = true;

  if (!post) return <h1 className="text-center mt-10">Loading...</h1>;

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">

      {/* 🔥 CARD CONTAINER */}
      <div className="bg-white shadow-xl rounded-2xl p-6">

        {/* IMAGE */}
        <div className="w-full mb-6 overflow-hidden rounded-xl">
  <img
  src={appwriteService.getFilePreview(post.featuredImage)}
  alt={post.title}
  className="w-full max-h-[500px] object-contain rounded-xl"
/>
        </div>

        {/* TITLE */}
        <h1 className="text-4xl font-bold mb-4 text-center">
          {post.title}
        </h1>

        {/* CONTENT */}
        <div
          className="prose max-w-none mb-6 text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* 🔥 LIKE BUTTON */}
        <div className="flex justify-center">
          <button
            onClick={async () => {
              const newLikes = likes + 1;
              const res = await appwriteService.updateLikes(post.$id, newLikes);

              if (res) {
                setLikes(newLikes);
              } else {
                alert("Like not saved ❌");
              }
            }}
            className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
          >
            ❤️ Like ({likes})
          </button>
        </div>

        {/* 🔥 COMMENTS */}
        <div className="mt-10">

          <h2 className="text-2xl font-semibold mb-3 text-center">Comments</h2>

          <div className="flex gap-2">
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              className="border px-3 py-2 w-full rounded-lg"
            />

            <button
             onClick={async () => {
  if (comment.trim()) {
    try {
      const res = await appwriteService.addComment(post.$id, comment);

      if (res) {
      setComments(res.comment || []); // ✅ update from DB
        setComment("");
      } else {
        alert("Comment not saved ❌");
      }

    } catch (error) {
      console.log("Comment error:", error);
    }
  }
}}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add
            </button>
          </div>

          {/* COMMENT LIST */}
          <div className="mt-4 space-y-2">
            {comments.map((c, i) => (
              <p key={i} className="bg-gray-100 p-3 rounded-lg">
                {c}
              </p>
            ))}
          </div>

        </div>

        {/* ✅ BUTTONS */}
        {isOwner && (
          <div className="flex justify-center gap-4 mt-8">

            <button
              onClick={() => navigate(`/edit-post/${post.$id}`)}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              ✏️ Edit
            </button>

            <button
              onClick={deletePost}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
            >
              🗑️ Delete
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default Post;