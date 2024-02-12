import { useEffect, useState } from "react";
import { useFilterImages } from "../hooks";
import { useCounter } from "../../../hooks";
import { LoadingButton } from "../../../components";
import { ItemGallery } from "./ItemGallery";
import { useLoaderData } from "react-router-dom";
import { Gallery } from "react-photoswipe-gallery";

import "photoswipe/dist/photoswipe.css";

export const MovieGallery = () => {
  const [isLoading, setIsLoading] = useState(false);

  const movie = useLoaderData();

  const {
    images: { backdrops },
  } = movie;

  const filteredBackdrops = useFilterImages(backdrops);

  const { counter, onIncrement, onReset } = useCounter(
    6,
    filteredBackdrops.length
  );

  const handleIncrement = () => {
    setIsLoading(true);

    setTimeout(() => {
      onIncrement(6);
      setIsLoading(false);
    }, 600);
  };

  useEffect(() => {
    onReset();
  }, [backdrops]);

  return (
    <>
      {filteredBackdrops.length > 0 && (
        <div className="col-span-3 lg:col-span-9">
          <h2 className="mb-5 text-2xl font-semibold text-white">Imágenes</h2>
          <Gallery>
            <div className="grid grid-cols-12 gap-4">
              {filteredBackdrops
                .slice(0, counter)
                .map(({ file_path }, index) => (
                  <ItemGallery
                    key={index}
                    index={index}
                    file_path={file_path}
                  />
                ))}
            </div>
          </Gallery>
          {counter >= filteredBackdrops.length ? null : (
            <LoadingButton
              isLoading={isLoading}
              handleIncrement={handleIncrement}
            />
          )}
        </div>
      )}
    </>
  );
};
