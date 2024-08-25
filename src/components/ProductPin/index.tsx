import React, { useState } from "react";

const images = [
  {
    id: 1,
    url: "/products/p1.jpg",
    tags: ["exterior"],
  },
  {
    id: 2,
    url: "/products/p2.jpg",
    tags: ["exterior"],
  },
  {
    id: 3,
    url: "/products/p3.jpg",
    tags: ["exterior"],
  },
  {
    id: 4,
    url: "/products/p4.jpg",
    tags: ["exterior"],
  },
  {
    id: 5,
    url: "/products/p5.jpg",
    tags: ["exterior"],
  },
  {
    id: 6,
    url: "/products/p6.jpg",
    tags: ["exterior"],
  },
  {
    id: 7,
    url: "/products/p7.jpg",
    tags: ["exterior"],
  },
  {
    id: 8,
    url: "/products/p8.jpg",
    tags: ["exterior"],
  },
  {
    id: 9,
    url: "/products/p9.jpg",
    tags: ["interior"],
  },
  {
    id: 10,
    url: "/products/p10.jpg",
    tags: ["interior"],
  },
  {
    id: 11,
    url: "/products/p11.jpg",
    tags: ["interior"],
  },
  {
    id: 12,
    url: "/products/p12.jpg",
    tags: ["interior"],
  },
  {
    id: 13,
    url: "/products/p13.jpg",
    tags: ["interior"],
  },
  {
    id: 14,
    url: "/products/p14.jpg",
    tags: ["interior"],
  },
  {
    id: 15,
    url: "/products/p15.jpg",
    tags: ["interior"],
  },
];

const ProductPin = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filterImages = () => {
    if (activeTab === "all") {
      return images;
    }
    return images.filter((image) => image.tags.includes(activeTab));
  };

  return (
    <div className="container mx-auto mb-4 px-4 py-8">
      {/* Tabs */}
      <div className="mb-6 flex justify-center">
        <button
          className={`px-4 py-2 font-semibold ${activeTab === "all" ? "border-b-2 border-primary-color" : "text-gray-500"}`}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={`ml-4 px-4 py-2 font-semibold ${activeTab === "exterior" ? "border-b-2 border-primary-color" : "text-gray-500"}`}
          onClick={() => setActiveTab("exterior")}
        >
          Exterior
        </button>
        <button
          className={`ml-4 px-4 py-2 font-semibold ${activeTab === "interior" ? "border-b-2 border-primary-color" : "text-gray-500"}`}
          onClick={() => setActiveTab("interior")}
        >
          Interior
        </button>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filterImages().map((image) => (
          <div key={image.id} className="group relative">
            <img
              src={image.url}
              alt={`Gallery ${image.id}`}
              className="h-72 w-full rounded-lg object-cover shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPin;
