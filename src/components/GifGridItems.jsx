export const GifGridItems = ({ title, url, id }) => {
  return (
    <div className=" m-1 ">
      <img
        className=" w-96 h-40 border-2 border-amarillo  object-cover rounded-md"
        src={url}
        alt={title}
      />
    </div>
  );
};
