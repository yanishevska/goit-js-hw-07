const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];


const galleryListEl = document.querySelector('#gallery');
galleryListEl.classList.add('gallery', 'grid');

const makeGallery = ({ url, alt }) => {
    return `<li><img src= ${url} alt='${alt}'></li>`
};
 const pushGallery = images.map(makeGallery).join('');

galleryListEl.insertAdjacentHTML('beforeend', pushGallery);
console.log(galleryListEl);

const galleryItems = galleryListEl.querySelectorAll('li')
galleryItems.forEach(gallery => gallery.classList.add('grid__item', 'gallery__item'));

const galleryImg = galleryListEl.querySelectorAll('img');
galleryImg.forEach(img => img.classList.add('gallery__img'));




