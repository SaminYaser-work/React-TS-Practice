import TJobs from "../types/TJobs";
import { MdDoubleArrow } from "react-icons/md";
import { useState } from "react";

export default function Jobs({ jobs }: { jobs: TJobs }) {
  const [index, setIndex] = useState(0);

  const selectedJob = jobs[index];

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center flex-col">
        <header>
          <h1 className="text-5xl font-bold text-center underline underline-offset-4 my-10">
            <span className="text-gray-800">Le Jobs</span>
          </h1>
        </header>

        <div className="flex justify-center items-start w-fit">
          <div>
            {jobs.map((job, i) => {
              return (
                <p
                  key={job.id}
                  onClick={(e) => setIndex(i)}
                  className={`cursor-pointer px-2 text-2xl mr-20 font-bold py-1 border-l-4 ${
                    i === index ? "border-blue-500" : "border-transparent"
                  } `}
                >
                  {job.company}
                </p>
              );
            })}
          </div>
          <div className="w-4/6">
            <div key={selectedJob.id}>
              <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
              <p className="bg-blue-200 px-2 py-1 mb-2 text-blue-500 font-bold w-min">
                {selectedJob.company}
              </p>
              <p className="text-xl text-slate-400 mb-4">{selectedJob.dates}</p>
              <div className="ml-5 max-w-2xl">
                {selectedJob.duties.map((duty, index) => (
                  <div className="flex justify-start items-start mb-2">
                    <p className="mr-10 text-blue-500">
                      <MdDoubleArrow fontSize={20} />
                    </p>
                    <p className="text-xl font-semibold" key={index}>
                      {duty}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
