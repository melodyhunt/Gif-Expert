import {useState} from 'react'
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["todo"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    //categories.push(newCategory);
    setCategories([newCategory, ...categories]);
    //setCategories([...categories,'Valorant'])
  };

  return (
    <div className="bg-white text-center">
      <div className="flex  bg-verde flex-col md:flex-row">
        {/** titulo */}
        <h1 className=" text-fuccia font-primary tracking-widest text-8xl p-3 uppercase">
          Gifs
        </h1>
        {/**input */}
        <AddCategory
          onNewCategory={(event) => onAddCategory(event)}
          //setCategories={setCategories}
        />
      </div>
      {/** Listadod De gift */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/**Gift Item */}
    </div>
  );
};
