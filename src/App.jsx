import { useState, useEffect } from 'react';
import JobInfo from './components/JobInfo';
import ButtonContainer from './components/ButtonContainer';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    );
  }

  return (
    <main>
      <section className='jobs-center'>
        <ButtonContainer
          jobs={jobs}
          currentJob={currentJob}
          setCurrentJob={setCurrentJob}
        />
        <JobInfo jobs={jobs} currentJob={currentJob} />
      </section>
    </main>
  );
};
export default App;
