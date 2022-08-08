//import { useEffect, useState } from "react";
import { GifGridItems } from "./GifGridItems";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <div>
      <h3 className="text-5xl font-primary my-3 text-violeta uppercase text-center">
        {category}
      </h3>
      <div className=" grid grid-cols-2 md:grid-cols-4 mx-10 ">
        {images.map((image) => (
          <GifGridItems key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};
