import React, { useEffect, useState } from 'react';
import '../Components/SweetPagination.css';

const SweetPagination = ({
  dataPerPage = 10,
  getData = [],
  currentPageData,
  navigation = true,
  getStyle,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(getData.length / dataPerPage);

  // Style handling
  const style =
    getStyle && getStyle !== 'style-custom' ? getStyle : 'sweetPagination';
  const customStyle = getStyle === 'style-custom' ? 'style-custom' : '';

  // Get current data
  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;
  const currentData = getData.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    currentPageData(currentData);
  }, [currentPage, getData, dataPerPage]);

  // Function to generate pagination numbers with ellipsis
  const getPaginationRange = () => {
    const delta = 2;
    const range = [];
    for (
      let i = Math.max(1, currentPage - delta);
      i <= Math.min(totalPages, currentPage + delta);
      i++
    ) {
      range.push(i);
    }
    if (range[0] !== 1) range.unshift('...');
    if (range[range.length - 1] !== totalPages) range.push('...');
    return range;
  };

  const handlePageChange = (num) => {
    if (num === '...') return;
    setCurrentPage(num);
  };

  if (totalPages <= 1) return null; // No pagination needed

  return (
    <nav className={`${style}`}>
      <ul className="paginationUL">
        {/* Previous Button */}
        {navigation && (
          <li className="pageItem">
            <button
              className="pageButton commonButtonStyle leftNavigation"
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
          </li>
        )}

        {/* Page Numbers */}
        {getPaginationRange().map((num, idx) => (
          <li key={idx} className="pageItem">
            <button
              onClick={() => handlePageChange(num)}
              className={
                currentPage === num
                  ? 'pageButton activeButton commonButtonStyle'
                  : `pageButton commonButtonStyle ${customStyle}`
              }
              disabled={num === '...'}
            >
              {num}
            </button>
          </li>
        ))}

        {/* Next Button */}
        {navigation && (
          <li className="pageItem">
            <button
              className="pageButton commonButtonStyle rightNavigation"
              onClick={() =>
                currentPage < totalPages && setCurrentPage(currentPage + 1)
              }
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default SweetPagination;
