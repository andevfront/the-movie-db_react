import { useFetch } from "../../../hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import "swiper/css";
import { SlideMovie } from "./SlideMovie";
import { useLoaderData } from "react-router-dom";

export const CarouselMovies = () => {
  const { popularMovies } = useLoaderData();

  const { results } = popularMovies;

  return (
    <Swiper
      className="h-[750px]"
      modules={[Autoplay, EffectFade]}
      effect="fade"
      loop={true}
      autoplay={{
        delay: 2800,
        disableOnInteraction: false,
      }}
    >
      {results.slice(0, 10).map((item) => (
        <SwiperSlide key={item.id}>
          <SlideMovie id={item.id} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
