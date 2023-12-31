const FoodCart = ({ cartData }) => {
  const { image, name, recipe, price } = cartData;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure className="relative">
        <img src={image} alt="food" />
        <p className="absolute bg-black px-4 py-2 text-white right-5 bottom-48 rounded-xl">
          {price}
        </p>
      </figure>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
