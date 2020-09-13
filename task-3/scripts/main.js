import images from "./images.js";

const gallery = document.querySelector("#gallery");

const markup = createGallery(images);
gallery.insertAdjacentHTML("beforeend", markup);

function createGallery(items) {
  return items.map((item) => createGalleryItem(item)).join("");
}

function createGalleryItem({ url, alt }) {
  const newItems = `
  <li class="menu-item">
    <img src="${url}" alt="${alt}">
  </li>
  `;

  return newItems;
}
