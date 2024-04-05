import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import PropTypes from "prop-types";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.imageGallery}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} openModal={openModal} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};
export default ImageGallery;
