export const GifGridItems = ({ title, url, id }) => {
  return (
    <div className=" m-1 ">
      <img className=" w-72 h-72  p-3 hover:p-0 " src={url} alt={title} />
    </div>
  );
};
