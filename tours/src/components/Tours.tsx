import { useState } from "react";
import {ITour} from "../types/tours"

const Tours: React.FC<ITour> = ({Tour, RemoveTour}) => {

  const [readMore, setReadMore] = useState(false);


  const createList = () => {
      return Tour.map((tour) => {
        return (
          <li key={tour.id} className="my-5 bg-white rounded-lg shadow-xl">
            <div className="w-full">

              <img 
              className="w-full object-cover h-96" 
              src={tour.image} alt={tour.name} />

            </div>
            <div className="p-10">
              <div className="flex flex-col justify-between items-start my-5 md:flex-row md:items-center">
                <div className="text-3xl font-bold">{tour.name}</div>
                <div className="font-bold bg-blue-200 text-blue-500 p-1 rounded-md">${tour.price}</div>
              </div>
              <p>{readMore ? tour.info: `${tour.info.substring(0, 200)}...`}
                <button 
                className="text-blue-500 ml-1"
                onClick={(e) => setReadMore(prev => !prev)}>
                  {readMore ? "Show Less" : "Show More"}
                </button>
              </p>
            </div>

            <div className="flex justify-center items-center pb-5">
              <button
              onClick={(e) => RemoveTour(tour.id)}
              className="px-8 py-2 rounded-md border-2
               border-red-600 text-red-600 hover:text-white hover:bg-red-600">
                Not Interested
              </button>
            </div>

          </li>
        )
      })
  }

  return (
      <ul className="w-3/5 mx-auto">
        {createList()}
      </ul>
  )
}

export default Tours
