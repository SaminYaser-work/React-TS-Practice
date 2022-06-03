import { useState } from "react";
import List from "./List"
import data from "./data"

function App() {

  const [people, setPeople] = useState(data);
  console.log(people)

  return (
      <div className="w-3/5 min-w-min mx-auto my-auto">
        <main className="flex justify-center items-center flex-col px-10 py-2 rounded-lg bg-[#ffafcc]">
          <h2 className="text-white font-bold text-sm md:text-3xl mb-4">{people.length} Birthdays Today</h2>
          <List people={people} />
          <button onClick={() => setPeople([])} type="button" className="font-bold w-full px-4 py-1 rounded-lg bg-[#a2d2ff]">Clear All</button>
        </main>
      </div>
  )
}

export default App
