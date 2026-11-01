// Store each photo's URL, caption, description, and favorite flag.
const photos = [
  {
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80',
    caption: 'Mountain Lake',
    alt: 'A mountain lake surrounded by dramatic peaks',
    favorite: true
  },
  {
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop&q=80',
    caption: 'Forest Sunlight',
    alt: 'Sunlight filtering through a green forest',
    favorite: false
  },
  {
    url: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&auto=format&fit=crop&q=80',
    caption: 'Morning Light',
    alt: 'A landscape glowing in warm sunrise light',
    favorite: true
  }
];

const gallery = document.querySelector('#gallery');
const status = document.querySelector('#gallery-status');
const themeButton = document.querySelector('#theme-button');
const favoritesButton = document.querySelector('#favorites-button');

let favoritesOnly = false;

// Use a loop and a conditional to build the gallery.
const renderGallery = () => {
  gallery.replaceChildren();
  let displayedCount = 0;

  photos.forEach((photo) => {
    // Skip nonfavorites when the filter is enabled.
    if (favoritesOnly && !photo.favorite) {
      return;
    }

    const figure = document.createElement('figure');
    const image = document.createElement('img');
    const caption = document.createElement('figcaption');

    image.src = photo.url;
    image.alt = photo.alt;
    image.width = 800;
    image.height = 600;
    image.loading = 'lazy';

    caption.textContent = photo.favorite
      ? `${photo.caption} ★ Favorite`
      : photo.caption;

    figure.append(image, caption);
    gallery.append(figure);

    displayedCount += 1;
  });

  status.textContent = favoritesOnly
    ? `Showing ${displayedCount} favorite photos.`
    : `Showing all ${displayedCount} photos.`;
};

// Toggle dark mode using a CSS class.
themeButton.addEventListener('click', () => {
  const darkMode = document.body.classList.toggle('dark-mode');

  themeButton.setAttribute('aria-pressed', String(darkMode));
  themeButton.textContent = darkMode
    ? 'Switch to Light Mode'
    : 'Switch to Dark Mode';
});

// Toggle the favorites filter and rebuild the gallery.
favoritesButton.addEventListener('click', () => {
  favoritesOnly = !favoritesOnly;

  favoritesButton.setAttribute('aria-pressed', String(favoritesOnly));
  favoritesButton.textContent = favoritesOnly
    ? 'Show All Photos'
    : 'Show Favorites Only';

  renderGallery();
});

// Render the photos and reveal the working controls.
renderGallery();
document.querySelector('#gallery-controls').hidden = false;