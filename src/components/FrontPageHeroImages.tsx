import React from 'react';
import { Card } from 'flowbite-react';

const images = [
  { src: '/front-component/animals.jpg', alt: 'Animals', name: 'animals' },
  { src: '/front-component/cosmetics.jpg', alt: 'Cosmetics', name: 'cosmetics' },
  { src: '/front-component/drinks.jpg', alt: 'Drinks', name: 'drinks' },
  { src: '/front-component/food.jpg', alt: 'Food', name: 'food' },
  { src: '/front-component/people.jpg', alt: 'People', name: 'people' },
  { src: '/front-component/still-life.jpg', alt: 'Still Life', name: 'still-life' },
  { src: '/front-component/technology.jpg', alt: 'Technology', name: 'technology' },
];

const FrontPageHeroImages: React.FC = () => {
  console.log('FrontPageHeroImages component is rendering');
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {images.map((image) => (
        <div key={image.name} className="relative group overflow-hidden rounded-lg">
          <a href={`#${image.name}`}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 aspect-square"
              onError={() => console.error(`Failed to load image: ${image.src}`)}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">{image.alt}</span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default FrontPageHeroImages;
