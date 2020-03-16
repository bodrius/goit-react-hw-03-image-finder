import React from "react";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ galeryItem, largeImageURL,onOpen }) => {
  return (
    <ul className="ImageGallery">
      {galeryItem.map(item => (
        <ImageGalleryItem
          everyItem={item}
          key={item.id}
          galeryItem={galeryItem}
          onOpen={onOpen}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
