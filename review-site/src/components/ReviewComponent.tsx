import reviews from './data';
import { useState } from "react";
import {RiDoubleQuotesR} from "react-icons/ri";
import {FcNext} from "react-icons/fc";
import {FcPrevious} from "react-icons/fc";

export default function ReviewComponent() {


  const [index, setIndex] = useState(0);
  const {name, job, image, text} = reviews[index]
  
  return (
    <ul>
        <li>
          <div className='container mx-auto flex flex-col justify-center items-center px-10 py-5 bg-white shadow-lg'>

            <div className='relative'>
              <span className='block absolute text-white bg-cyan-400 rounded-full p-1 text-sm md:text-3xl z-20'><RiDoubleQuotesR /></span>
              <img className='relative w-20 h-20 md:w-40 md:h-40 rounded-full border border-gray-50 object-cover z-10' src={image} alt={name} />
              <span className='block absolute bg-blue-300 w-20 h-20 md:w-40 md:h-40 rounded-full -top-1 left-2'></span>
            </div>

            <div className='font-bold text-2xl capitalize'>
              <p>{name}</p>
            </div>

            <div className='text-blue-400 font-bold mb-2'>
              <p>{job}</p>
            </div>

            <div className='text-center mb-10'>
              <p>{text}</p>
            </div>

            <div className='flex justify-center items-center mb-5'>
              <button onClick={e => setIndex(prev => (prev + reviews.length - 1) % reviews.length)}>
                <FcPrevious className='text-blue-500 text-3xl' />
                {""}
              </button>

              <button  onClick={e => setIndex(prev => (prev + 1) % reviews.length)}>
                <FcNext className='text-blue-500 text-3xl' />
                {""}
              </button>
            </div>

            <div>
              <button onClick={e => setIndex(prev => {
                const a = Math.floor(Math.random() * reviews.length);
                if (a === prev) return (a + 1) % reviews.length;
                return a;
              })}
               className='px-4 py-2 bg-blue-200 text-blue-500 rounded-lg font-bold'>
                Suprise Me
              </button>
            </div>

          </div>
        </li>
    </ul>
  )
}
