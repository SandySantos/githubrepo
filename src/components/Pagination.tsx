const Pagination = ({ onNext, onPrev, totalPages, currentPage }: any) => {
  return (
    <div className='flex justify-between p-3 border max-w-5xl mx-auto'>
      <button
        className='border p-2 shadow-md rounded-md'
        onClick={onPrev}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <button
        className='border p-2 shadow-md rounded-md'
        onClick={onNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
