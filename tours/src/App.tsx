import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
import {ITour} from "./types/tours";


const url = 'https://course-api.com/react-tours-project';

function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState<ITour["Tour"]>([]);

  const removeTour = (id: string) => {
    setTours(prev => prev.filter(tour => tour.id !== id))
  }

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])


  
  return (
    <>
      <main>
        <div className="w-full">
          <h1 className="text-3xl mx-auto w-fit underline underline-offset-1 my-8">Le Tours</h1>
        </div>
        {loading && <Loading />}

        {!loading && tours.length === 0 && 

          <div className="flex justify-center items-center flex-col">
            <p className="text-3xl my-8">No More Tours 😭 </p>
            <button className="px-4 py-2 bg-blue-400 text-white rounded-md"
            onClick={(e) => fetchTours()}>
              Refresh
            </button>
          </div>
          
        }

        {!loading && <Tours Tour={tours} RemoveTour={removeTour} />}
      </main>
    </>
  )
}

export default App
