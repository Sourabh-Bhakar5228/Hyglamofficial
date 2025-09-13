import React, { useEffect, useState } from "react";

export default function SocialFeed() {
  const [platform, setPlatform] = useState("instagram"); // instagram | facebook
  const [mediaType, setMediaType] = useState("image"); // image | video
  const [posts, setPosts] = useState([]);

  // Generate random jewelry images/videos for demo
  useEffect(() => {
    const jewelryImages = [
      "https://cdn.pixabay.com/photo/2017/06/18/14/47/bindi-2416039_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/03/23/accessory-1867039_1280.jpg",
      "https://cdn.pixabay.com/photo/2020/01/24/10/08/silver-4789822_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/05/31/14/49/gold-792002_1280.jpg",
      "https://cdn.pixabay.com/photo/2021/09/15/09/18/rajasthani-6626357_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/02/13/17/15/indian-jewelry-1198242_1280.jpg",
      "https://cdn.pixabay.com/photo/2020/05/22/07/46/model-5204225_1280.jpg",
    ];

    const jewelryVideos = [
      "https://cdn.pixabay.com/video/2024/07/03/219228_tiny.mp4",
      "https://cdn.pixabay.com/video/2023/01/11/146131-788410158_tiny.mp4",
      "https://cdn.pixabay.com/video/2020/04/09/35575-407595493_tiny.mp4",
    ];

    const demoPosts = Array.from({ length: 12 }).map((_, i) => {
      const isVideo = Math.random() > 0.6;
      return {
        id: `jewel-${i}`,
        platform: Math.random() > 0.5 ? "instagram" : "facebook",
        type: isVideo ? "video" : "image",
        src: isVideo
          ? jewelryVideos[Math.floor(Math.random() * jewelryVideos.length)]
          : jewelryImages[Math.floor(Math.random() * jewelryImages.length)],
        caption: `Random Jewelry ${isVideo ? "Video" : "Image"} #${i + 1}`,
        createdAt: new Date(Date.now() - i * 60000),
      };
    });

    setPosts(demoPosts);
  }, []);

  // Filter posts based on current selection
  const filtered = posts.filter(
    (p) => p.platform === platform && p.type === mediaType
  );

  // Helper to render a single post card
  function PostCard({ post }) {
    return (
      <div className="relative group rounded-xl overflow-hidden shadow-md">
        {post.type === "image" ? (
          <a href={post.src} target="_blank" rel="noreferrer">
            <img
              src={post.src}
              alt={post.caption}
              className="w-full h-[500px] object-cover cursor-pointer group-hover:opacity-90 transition"
            />
          </a>
        ) : (
          <video
            className="w-full h-[500px] object-cover bg-black"
            muted
            loop
            playsInline
            onMouseOver={(e) => e.currentTarget.play()}
            onMouseOut={(e) => e.currentTarget.pause()}
          >
            <source src={post.src} />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Badge */}
        <span
          className={`absolute top-3 left-3 px-2 py-1 text-xs rounded-full font-medium ${
            post.type === "image"
              ? "bg-blue-500 text-white"
              : "bg-green-500 text-white"
          }`}
        >
          {post.type === "image" ? "📷 Image" : "🎥 Video"}
        </span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Controls */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold">Jewelry Social Feed</h2>

        <div className="flex gap-3 items-center">
          {/* Platform selector */}
          <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setPlatform("instagram")}
              className={`px-3 py-2 rounded-full text-sm ${
                platform === "instagram" ? "bg-white shadow" : "text-gray-600"
              }`}
            >
              Instagram
            </button>
            <button
              onClick={() => setPlatform("facebook")}
              className={`px-3 py-2 rounded-full text-sm ${
                platform === "facebook" ? "bg-white shadow" : "text-gray-600"
              }`}
            >
              Facebook
            </button>
          </div>

          {/* Media type selector */}
          <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setMediaType("image")}
              className={`px-3 py-2 rounded-full text-sm ${
                mediaType === "image" ? "bg-white shadow" : "text-gray-600"
              }`}
            >
              Image
            </button>
            <button
              onClick={() => setMediaType("video")}
              className={`px-3 py-2 rounded-full text-sm ${
                mediaType === "video" ? "bg-white shadow" : "text-gray-600"
              }`}
            >
              Video
            </button>
          </div>
        </div>
      </div>

      {/* Grid posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.length === 0 && (
          <div className="p-4 bg-white border rounded-2xl text-gray-500 col-span-full text-center">
            No posts found.
          </div>
        )}

        {filtered.slice(0, 12).map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
