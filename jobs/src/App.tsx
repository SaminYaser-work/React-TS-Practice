import { useEffect, useState } from "react";
import Jobs from "./components/Jobs";
import TJobs from "./types/TJobs";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState<TJobs>([]);

  const fetchJobs = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://course-api.com/react-tabs-project");
      const json = await response.json();
      setJobs(json);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading && <Jobs jobs={jobs} />}
    </div>
  );
}

export default App;
