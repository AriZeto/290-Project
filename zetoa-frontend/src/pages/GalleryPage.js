import React from "react";
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'images/barbie-on-street.jpg',
      thumbnail: 'images/barbie-on-street.jpg',
      description: `Photographed naked Barbie doll facing down on the street`,
      originalHeight: '450px',
    },
    {
        original: 'images/busy-parking-multnomah.jpg',
        thumbnail: 'images/busy-parking-multnomah.jpg',
        description: `A busy parking lot towards Multnomoah Falls.`,
        originalHeight: '450px',
      },
      {
        original: 'images/cafe-finder-app-dm.jpg',
        thumbnail: 'images/cafe-finder-app-dm.jpg',
        description: `A user-interface prototype showcasing direct messaging for a 'cafe finding' app.`,
        originalHeight: '450px',
      },
      {
        original: 'images/cat-looking.jpg',
        thumbnail: 'images/cat-looking.jpg',
        description: `A grey cat looking directly into the lens of a camera.`,
        originalHeight: '450px',
      },
      {
        original: 'images/cs161-final-project.jpg',
        thumbnail: 'images/cs161-final-project.jpg',
        description: `A preview of the final project for CS 161.`,
        originalHeight: '450px',
      },
      {
        original: 'images/cs162-final-project.jpg',
        thumbnail: 'images/cs162-final-project.jpg',
        description: `A preview of the final project for CS 162.`,
        originalHeight: '450px',
      },
      {
        original: 'images/ducks-in-pond.jpg',
        thumbnail: 'images/ducks-in-pond.jpg',
        description: `A group of ducks in a pond coming towards the view.`,
        originalHeight: '450px',
      },
      {
        original: 'images/girl-looking-camera-lens.jpg',
        thumbnail: 'images/girl-looking-camera-lens.jpg',
        description: `A woman looking directly into the lens of the camera, smiling.`,
        originalHeight: '450px',
      },
      {
        original: 'images/greyscale-hand-on-grass.jpg',
        thumbnail: 'images/greyscale-hand-on-grass.jpg',
        description: `A hand held out in the grass, in greyscale to depict a certain emotion.`,
        originalHeight: '450px',
      },
      {
        original: 'images/looking-out-forest.jpg',
        thumbnail: 'images/looking-out-forest.jpg',
        description: `Looking out toward a forest in Multnomah falls.`,
        originalHeight: '450px',
      },
      {
        original: 'images/math-project-presentation.jpg',
        thumbnail: 'images/math-project-presentation.jpg',
        description: `A project regarding the Dot Product in a Multivariable Calculus class from my prior Math undergrad.`,
        originalHeight: '450px',
      },
      {
        original: 'images/waterfall-scenery.jpg',
        thumbnail: 'images/waterfall-scenery.jpg',
        description: `A look underneath a waterfall at Multnomah Falls.`,
        originalHeight: '450px',
      },
      {
        original: 'images/zoomed-in-water-background.jpg',
        thumbnail: 'images/zoomed-in-water-background.jpg',
        description: `A zoomed in shot of some river water while on a boat. You may notice that this is the background of the webpage!`,
        originalHeight: '450px',
      }
    ]


function GalleryPage() {
    return (
        <>
        <h2>Gallery</h2>
        <p>Here you may see some of my projects and hobbies I've done over time.</p>
                <article className="gallery">
                    <ImageGallery items={images} />
                </article>
                </>
    );
}

export default GalleryPage;