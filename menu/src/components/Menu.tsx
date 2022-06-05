type TMenu = {
  items: {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
  }[];
};

export const Menu = ({ items }: TMenu) => {
  return (
    <div className="mx-auto md:w-8/12 flex flex-wrap">
      {items.map((item) => (
        <article
          key={item.id}
          className="flex justify-center items-center flex-wrap m-5 md:m-10 md:flex-row md:items-start"
        >
          <img
            className="border-orange-500 border-4 object-cover h-72 w-full md:w-[20rem]"
            src={item.img}
            alt={item.title}
          />
          <div className="md:w-[20rem] md:ml-3 md:mt-2">
            <header className="mb-2 flex justify-between items-center">
              <h4 className="text-xl font-bold capitalize">{item.title}</h4>
              <h5 className="text-orange-500 md:mt-2">${item.price}</h5>
            </header>
            <hr />
            <p className="bg-yellow-400 px-1 py-1 rounded-lg w-min mt-2 text-slate-700 capitalize">
              {item.category}
            </p>
            <p className="md:mt-5">{item.desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
};
