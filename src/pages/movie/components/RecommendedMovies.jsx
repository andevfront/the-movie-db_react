import { RecoMovieCard } from "./RecoMovieCard";
import { useFetch } from "../../../hooks";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export const RecommendedMovies = ({ id }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;

  const { data, isLoading } = useFetch(API_URL);

  if (isLoading) return;

  return (
    <>
      <h1 className="mt-10 text-2xl font-semibold text-white">
        Películas recomendadas
      </h1>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop="true"
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="mySwiper relative flex select-none items-center px-2 py-5"
      >
        {data.results.map((item) => (
          <SwiperSlide key={item.id}>
            <RecoMovieCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
