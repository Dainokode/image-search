import React from "react";

function ImageResults({ images }) {
  return (
    <div className="image-grid image-container">
      {images.map((image) => {
        return (
          <div key={image.id} className="img-wrap">
            <img src={image.webformatURL} alt="image from pixabay" />
          </div>
        );
      })}
    </div>
  );
}

export default ImageResults;
