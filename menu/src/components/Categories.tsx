export const Categories = ({
  filterItems,
  categories,
}: {
  filterItems: (category: string) => void;
  categories: string[];
}) => {
  return (
    <div className="w-fit mx-auto mt-5">
      {categories.map((category) => (
        <button
          key={category}
          className="capitalize bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full m-2"
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}

      {/* <button
        className="bg-amber-400 rounded-lg px-4 py-2 mx-1"
        onClick={(e) => filterItems("all")}
      >
        All
      </button> */}
    </div>
  );
};
