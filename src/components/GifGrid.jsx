import { GifGridItems } from "./GifGridItems";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <div>
      <h3 className="text-5xl font-primary my-3 text-violeta uppercase text-center">
        {category}
      </h3>
      {isLoading && <h4>Cargando...</h4>}

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-10 md:mx-20 ">
        {images.map((image) => (
          <GifGridItems key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};
