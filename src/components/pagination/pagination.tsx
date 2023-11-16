import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

import { Button } from '../ui/button';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const previousPage = () => {
    onPageChange(currentPage - 1);
  };
  const nextPage = () => {
    onPageChange(currentPage + 1);
  };
  return (
    <div className="w-3/4 flex justify-between">
      <GrFormPrevious
        className="text-5xl"
        onClick={() => previousPage()}
        disabled={currentPage === 1}
      />
      {pageNumbers.map((number) => (
        <Button
          key={number}
          onClick={() => onPageChange(number)}
          disabled={currentPage === number}
          className="text-xl text-red-500"
        >
          sajksag
        </Button>
      ))}
      <GrFormNext
        className="text-5xl"
        onClick={() => nextPage()}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};

export default Pagination;
