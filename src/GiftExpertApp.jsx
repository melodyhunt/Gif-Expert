import {useState} from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["one Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    //categories.push(newCategory);
    setCategories([newCategory, ...categories]);
    //setCategories([...categories,'Valorant'])
  };

  return (
    <div>
      {/** titulo */}
      <h1 className="text-pink-500">HOla</h1>
      {/**input */}
      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
        //setCategories={setCategories}
      />
      {/** Listadod De gift */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/**Gift Item */}
    </div>
  );
};
