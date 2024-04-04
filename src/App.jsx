import { useState } from "react";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./Api/image";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  const onClick = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      setPage(2);
      const response = await fetchImages(query, 1);
      setImages(response.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const handleLoadMore = async () => {
    const response = await fetchImages(query, page);
    setImages((prev) => [...prev, ...response.results]);
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} onClick={onClick} />
      {isLoading && !error && <Loader />}
      <ImageGallery images={images} openModal={openModal} />
      {error && <ErrorMessage />}
      <ImageModal
        isOpen={isOpen}
        closeModal={closeModal}
        imageUrl={selectedImage}
      />
      {images.length > 0 && <LoadMoreBtn onLoadMore={handleLoadMore} />}
    </>
  );
}

export default App;
