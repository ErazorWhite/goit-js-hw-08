import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Создаёт разметку по шаблону из gallery-items.js
function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
        </a>
    </li>`;
    })
    .join('');
}

const galleryEl = document.querySelector('.gallery'); // Выбираем наш список с фото из галереи
galleryEl.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems)); // Закидываем туда разметку с фотками из шаблона

new SimpleLightbox('.gallery a', {
  captions: true, // Включаем подписи
  captionPosition: 'bottom', // Внизу
  captionDelay: 250, // Появляются через 250мс
  captionsData: 'alt', // Текст берут из img alt атрибута
});
