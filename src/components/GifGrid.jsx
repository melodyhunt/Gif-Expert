import { useEffect, useState } from "react";

const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=CIBinQDGk2qqWYOIidUhPN72pSfIjhhq&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  console.log(gifs);
  return gifs;
};

export const GifGrid = ({ category }) => {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    getGifs(category);
  }, []);

  return (
    <div>
      <h3>{category}</h3>
      <h5>{counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  );
};
