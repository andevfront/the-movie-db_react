import { motion } from "framer-motion";
import { Item } from "react-photoswipe-gallery";

export const ItemGallery = ({ index, file_path }) => {
  return (
    <Item
      key={index}
      original={`https://image.tmdb.org/t/p/original${file_path}`}
      thumbnail={`https://image.tmdb.org/t/p/w500${file_path}`}
      width="3840"
      height="2160"
    >
      {({ ref, open }) => (
        <motion.div
          className="col-span-6 overflow-hidden rounded bg-slate-800 transition-all duration-500 hover:scale-105 sm:col-span-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            ref={ref}
            src={`https://image.tmdb.org/t/p/w500${file_path}`}
            alt={index}
            className="cursor-pointer transition-all duration-500 hover:opacity-75"
            onClick={open}
          />
        </motion.div>
      )}
    </Item>
  );
};
