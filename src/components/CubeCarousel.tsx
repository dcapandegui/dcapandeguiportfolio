import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

interface CubeEffectCarouselProps {
  items: { src: string; alt: string }[];
  width: string;
}

export default function CubeEffectCarousel({ items, width }: CubeEffectCarouselProps) {
  return (
    <Swiper
      effect="cube"
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      pagination={true}
      loop={true}
      modules={[EffectCube, Pagination, Autoplay]}
      style={{ paddingBottom: "50px", margin: "auto", width: width }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} style={{ background: "transparent" }}>
          <img
            src={item.src}
            alt={item.alt}
            style={{ width: width, borderRadius: "10px" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
