const ButtonContainer = ({ jobs, currentItem, setCurrentJob }) => {
  return (
    <div className='btn-container'>
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => setCurrentJob(index)}
            className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};
export default ButtonContainer;
