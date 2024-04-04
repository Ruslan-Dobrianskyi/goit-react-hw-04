import Modal from "react-modal";
import { IoMdCloseCircle } from "react-icons/io";

const ImageModal = ({ isOpen, closeModal, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          border: "none",
          background: "none",
          overflow: "hidden",
          padding: 0,
          borderRadius: "10px",
        },
      }}
    >
      <button
        onClick={closeModal}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          border: "none",
          background: "none",
          cursor: "pointer",
        }}
      >
        <IoMdCloseCircle
          style={{
            color: "red",
            fontSize: "30px",
            cursor: "pointer",
            borderRadius: "50%",
            backgroundColor: "white",
          }}
        />
      </button>
      <img
        src={imageUrl}
        alt="image"
        style={{ maxWidth: "700px", maxHeight: "700px" }}
      />
    </Modal>
  );
};

export default ImageModal;
