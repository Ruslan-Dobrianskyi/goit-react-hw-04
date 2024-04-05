import s from "./ImageCard.module.css";
import PropTypes from "prop-types";
const ImageCard = ({ image, openModal }) => {
  const handleClick = () => {
    openModal(image.urls.regular);
  };
  return (
    <li className={s.imageCard} onClick={handleClick}>
      <img
        className={s.image}
        width="300"
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </li>
  );
};

ImageCard.propTypes = {
  image: PropTypes.shape({
    alt_description: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }),
  }),
  openModal: PropTypes.func.isRequired,
};

export default ImageCard;
