// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const refGallery = document.querySelector('.gallery');

const cardGallery = cardGalleryItems(galleryItems);
refGallery.insertAdjacentHTML('beforeend', cardGallery);

function cardGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img
    class="gallery__image"
      src="${preview}"
      data-source= "${original}"
      alt="${description}"
      />
    </a>`;
    })
    .join(' ');
}

const onModal = new SimpleLightbox('.gallery__item', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
