const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];

const itemEl = document.querySelector('.gallery');
itemEl.classList.add('gallery-list');
const navItemEl1 = document.createElement('li');
const imagesEl1 = document.createElement('img');
imagesEl1.src =
  'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260';
imagesEl1.alt = 'White and Black Long Fur Cat';
imagesEl1.width = '360';
imagesEl1.height = '300';
navItemEl1.append(imagesEl1);

const navItemEl2 = document.createElement('li');
const imagesEl2 = document.createElement('img');
imagesEl2.src =
  'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260';
imagesEl2.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
imagesEl2.width = '360';
imagesEl2.height = '300';
navItemEl2.append(imagesEl2);

const navItemEl3 = document.createElement('li');
const imagesEl3 = document.createElement('img');
imagesEl3.src =
  'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260';
imagesEl3.alt = 'Group of Horses Running';
imagesEl3.width = '360';
imagesEl3.height = '300';
navItemEl3.append(imagesEl3);

const navItemEl4 = document.createElement('li');
const imagesEl4 = document.createElement('img');
imagesEl4.src =
  'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg';
imagesEl4.alt = 'Alpine Spring Meadows';
imagesEl4.width = '360';
imagesEl4.height = '300';
navItemEl4.append(imagesEl4);

const navItemEl5 = document.createElement('li');
const imagesEl5 = document.createElement('img');
imagesEl5.src =
  'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg';
imagesEl5.alt = 'Nature Landscape';
imagesEl5.width = '360';
imagesEl5.height = '300';
navItemEl5.append(imagesEl5);

const navItemEl6 = document.createElement('li');
const imagesEl6 = document.createElement('img');
imagesEl6.src =
  'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg';
imagesEl6.alt = 'Lighthouse Coast Sea';
imagesEl6.width = '360';
imagesEl6.height = '300';
navItemEl6.append(imagesEl6);

itemEl.append(
  navItemEl1,
  navItemEl2,
  navItemEl3,
  navItemEl4,
  navItemEl5,
  navItemEl6
);
