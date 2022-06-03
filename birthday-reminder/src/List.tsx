type peopleProp = { people: { name: string; age: string; image: string; }[] }

const List: React.FC<peopleProp> = ({people}) => {
  console.log(people)
  return (

    <div className="w-3/4">
      {people.map((p, index) => (

        <div key={index} className="flex justify-around items-center my-2 py-2 px-10 bg-[#ffc8dd] rounded-lg shadow-xl">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={p.image} alt={p.name} />
          </div>
          <div className="ml-2">
            <h3 className="text-sm font-bold">{p.name}</h3>
            <p className="text-xs">{"Age: " + p.age}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default List