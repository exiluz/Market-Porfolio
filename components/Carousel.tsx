import {
  CarouselProvider,
  Slider,
  Slide,
  CarouselContext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";

const Carousel = (props: {
  title: string;
  images: Array<string>;
  className?: string;
}) => {
  const { images, className = "" } = props;

  return (
    <CarouselProvider
      className={className}
      naturalSlideWidth={100}
      naturalSlideHeight={0}
      totalSlides={images.length}
      isIntrinsicHeight={true}
    >
      <Slider className="mb-5">
        {images.map((image, index) => (
          <Slide key={index} index={index}>
            <div className="w-full">
              <Image src={image} alt="" width="1000" height="750" />
            </div>
          </Slide>
        ))}
      </Slider>

      <CarouselContext.Consumer>
        {({ state, setStoreState }) => {
          const { currentSlide } = state;

          return (
            <div className="flex space-x-3">
              {images.map((image, index) => (
                <button
                  aria-label={`image slide ${index}`}
                  className={`h-12 w-12 border rounded-md hover:opacity-100 transition-opacity ${
                    currentSlide === index ? "" : "opacity-75"
                  }`}
                  key={index}
                  onClick={() => setStoreState({ currentSlide: index })}
                >
                  <Image
                    src={images[index]}
                    alt={`image slide ${index}`}
                    height="48"
                    width="48"
                    objectFit="cover"
                  />
                </button>
              ))}
            </div>
          );
        }}
      </CarouselContext.Consumer>
    </CarouselProvider>
  );
};

export default Carousel;
