import { useFetch } from "../../../hooks";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { SlideMovie } from "./SlideMovie";

export const CarouselMovies = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  const { data, isLoading } = useFetch(API_URL);

  if (isLoading) return;

  const { results } = data;

  return (
    <Swiper className="">
      {results.slice(0, 5).map((item) => (
        <SwiperSlide key={item.id}>
          <SlideMovie id={item.id} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
