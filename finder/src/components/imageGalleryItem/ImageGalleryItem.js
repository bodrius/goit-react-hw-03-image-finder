import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ everyItem, onOpen }) => {
  return (
    <>
      <li className="ImageGalleryItem">
        <img
          src={everyItem.webformatURL}
          alt={everyItem.type}
          className="ImageGalleryItem-image"
          onClick={() => onOpen(everyItem.largeImageURL)}
        />
      </li>
    </>
  );
};

ImageGalleryItem.prototype = {
  galeryItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      largeImageURL: PropTypes.string,
      type: PropTypes.string
    }).isRequired
  ).isRequired
};

export default ImageGalleryItem;
