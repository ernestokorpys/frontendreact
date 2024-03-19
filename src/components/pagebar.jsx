import '../pages/styles/pagebar-style.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PaginationBar = (props) => {
  const totalPages = props.totalPages;
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get('page')) || 1;
    setCurrentPage(page);
  }, [location.search]);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <a
          key={i}
          className={i === currentPage ? 'active' : ''}
          href={`?page=${i}${location.search}`} // Añade los parámetros de la URL actual
        >
          {i}
        </a>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination-bar">
      <a
        className={currentPage === 1 ? 'disabled' : ''}
        href={`?page=${currentPage - 1}${location.search}`} // Añade los parámetros de la URL actual
      >
        Anterior
      </a>
      {currentPage > 1 && <a href={`?page=1${location.search}`}>1</a>}
      {currentPage > 2 && <span>...</span>}
      {renderPageNumbers()}
      {currentPage < totalPages - 1 && <span>...</span>}
      {currentPage < totalPages && <a href={`?page=${totalPages}${location.search}`}>{totalPages}</a>}
      <a
        className={currentPage === totalPages ? 'disabled' : ''}
        href={`?page=${currentPage + 1}${location.search}`} // Añade los parámetros de la URL actual
      >
        Siguiente
      </a>
    </div>
  );
};

export default PaginationBar;