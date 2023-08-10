import { RecoMovieCard } from "./RecoMovieCard";
import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export const RecommendedMovies = () => {
  const { recommendations } = useLoaderData();

  const { results } = recommendations;

  const slidesPerView = Math.min(5, Math.max(2, results.length));

  return (
    <>
      {results.length > 0 && (
        <>
          <h1 className="mt-10 text-2xl font-semibold text-white">
            Películas recomendadas
          </h1>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
            loop={results.length >= slidesPerView * 2}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
            }}
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
            {results.map((item) => (
              <SwiperSlide className="h-auto" key={item.id}>
                <RecoMovieCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </>
  );
};
