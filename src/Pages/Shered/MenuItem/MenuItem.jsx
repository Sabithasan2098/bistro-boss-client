const MenuItem = ({ menu }) => {
  const { image, name, recipe, price } = menu;
  return (
    <div className="flex gap-3">
      <img
        className="w-[118px] h-[104px] rounded-r-full rounded-b-full"
        src={image}
        alt=""
      />
      <div>
        <div className="flex justify-between pb-4">
          <h1 className="text-xl">{name}--------------</h1>
          <p>{price}</p>
        </div>
        <p>{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
