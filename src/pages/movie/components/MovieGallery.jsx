import { useState } from "react";
import { MovieTrailer } from "./MovieTrailer";
import { useFetch } from "../../../hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import PlayImg from "../images/play_icon.png";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export const MovieGallery = ({ id }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}`;

  const { data, isLoading } = useFetch(API_URL);

  if (isLoading) return;

  const { backdrops } = data;

  return (
    <div className="col-span-3 lg:col-span-9">
      <Swiper
        spaceBetween={10}
        loop={true}
        navigation={{ nextEl: ".button-next", prevEl: ".button-prev" }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 relative flex h-[300px] select-none items-center sm:h-[550px]"
      >
        <SwiperSlide>
          <MovieTrailer id={id} />
        </SwiperSlide>

        {backdrops.map(({ file_path }) => (
          <SwiperSlide key={file_path}>
            <img
              src={`https://image.tmdb.org/t/p/w1280${file_path}`}
              alt={file_path}
            />
          </SwiperSlide>
        ))}

        <div className="button-prev absolute left-2 z-[3] cursor-pointer rounded-full bg-sky-500 p-4 transition-all duration-500 hover:bg-sky-700">
          <FiArrowLeft />
        </div>
        <div className="button-next absolute right-2 z-[3] cursor-pointer rounded-full bg-sky-500 p-4 transition-all duration-500 hover:bg-sky-700">
          <FiArrowRight />
        </div>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper mt-4 h-[70px] sm:h-[150px]"
      >
        <SwiperSlide className="relative">
          <img
            src={`https://image.tmdb.org/t/p/w1280${backdrops[0].file_path}`}
          />
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={PlayImg}
          />
        </SwiperSlide>
        {backdrops.map(({ file_path }) => (
          <SwiperSlide key={file_path}>
            <img
              src={`https://image.tmdb.org/t/p/w1280${file_path}`}
              alt={file_path}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
