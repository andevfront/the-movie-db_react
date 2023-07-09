import { useFetch } from "../../../hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import "swiper/css";
import { SlideMovie } from "./SlideMovie";

export const CarouselMovies = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  const { data, isLoading } = useFetch(API_URL);

  if (isLoading) return;

  const { results } = data;

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
