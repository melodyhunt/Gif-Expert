import {useState} from 'react'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    //setCategories(categories => [inputValue,...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };
  return (
    <div className=" pt-0 md:pt-7">
      <form onSubmit={onSubmit} className="">
        <input
          className="  py-2 md:pr-80 pr-32  pl-2 rounded-md border-2 items-center m-5 mt-0"
          type="text"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </div>
  );
};
