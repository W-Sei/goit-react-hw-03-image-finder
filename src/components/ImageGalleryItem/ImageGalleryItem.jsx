import { ImageItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  openModal,
}) => {
  return (
    <ImageItem>
      <Image
        src={webformatURL}
        alt=""
        onClick={() => openModal(largeImageURL)}
      />
    </ImageItem>
  );
};
