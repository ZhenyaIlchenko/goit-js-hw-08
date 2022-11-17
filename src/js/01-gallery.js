import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const galleryItemEl = galleryItems
  .map(
    item =>
      `<div class="gallery__item">
<a class="gallery__item" href="${item.original}">
<img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"/></a></div>`
  )
  .join('');
galleryEl.insertAdjacentHTML('beforeend', galleryItemEl);
// console.log(galleryEl);

const gallery = new SimpleLightbox('.gallery a', {
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
