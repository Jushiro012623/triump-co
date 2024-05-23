import React from 'react'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


function Carousel({image}) {
    
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]) 
  return (
    <div className="embla" ref={emblaRef}>
        <div className="embla__container">
            {image.map((images, index) => (
                <div className="embla__slide" key={index}>
                    <img src={images.img} alt="" />
                    <button>shop now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Carousel