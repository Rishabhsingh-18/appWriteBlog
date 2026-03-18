import React, { useEffect } from "react";   // ✅ added useEffect
import { useForm } from "react-hook-form";
import RTE from "../RTE";

// ✅ added
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";

function AddPost() {

  // ✅ added watch + setValue
  const { register, handleSubmit, control, watch, setValue } = useForm();

  // ✅ added
  const navigate = useNavigate();

  // ✅ added (watch title)
  const title = watch("title");

  // ✅ added (auto slug logic)
  useEffect(() => {
    if (title) {
      const slug = title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-");

      setValue("slug", slug);
    }
  }, [title, setValue]);

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const file = data.image[0];

      const uploadedFile = await appwriteService.uploadFile(file);

      if (uploadedFile) {
        const postData = {
          ...data,
          featuredImage: uploadedFile.$id,
        };

        const res = await appwriteService.createPost(postData);

        if (res) {
          alert("Post created ✅");
          navigate("/all-posts");
        } else {
          alert("Post not saved ❌");
        }
      }

    } catch (error) {
      console.log("Submit error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Create New Post
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            {...register("title")}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Slug */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Slug</label>
          <input
            type="text"
            placeholder="Enter slug"
            {...register("slug")}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Featured Image */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">
            Featured Image
          </label>
          <input
            type="file"
            {...register("image")}
            className="w-full border border-gray-300 rounded-lg p-2 bg-white"
          />
        </div>

        {/* Content */}
        <div className="mb-4">
          <RTE 
            name="content" 
            control={control} 
            label="Content" 
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Submit Post
        </button>

        </form>
      </div>
    </div>
  );
}

export default AddPost;