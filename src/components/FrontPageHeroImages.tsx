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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <div key={image.name}>
          <Card>
            <a href={`#${image.name}`}>
              <img
                src={image.src}
                alt={image.alt}
                style={{ height: '300px', width: '300px', objectFit: 'cover', borderRadius: '0.5rem' }}
                onError={() => console.error(`Failed to load image: ${image.src}`)}
              />
            </a>
          </Card>
        </div>
      ))}
      <div>Debug: Component rendered successfully</div>
    </div>
  );
};

export default FrontPageHeroImages;
