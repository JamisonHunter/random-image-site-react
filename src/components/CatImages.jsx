// components/CatImages.js
import React, { useState, useEffect } from "react";
import "./CatImages.css";

const CatImages = () => {
  const [catImages, setCatImages] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=10",
        );
        if (response.ok) {
          const data = await response.json();
          setCatImages(data);
        } else {
          console.error("Failed to fetch cat images:", response.status);
        }
      } catch (error) {
        console.error("Error fetching cat images:", error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <div className="cat-images">
      {catImages.map((image) => (
        <img key={image.id} src={image.url} alt="Cat" />
      ))}
    </div>
  );
};

export default CatImages;
