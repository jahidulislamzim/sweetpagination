import React, { useEffect, useState } from "react";
import "./Components/SweetPagination.css";

const SweetPagination = ({ dataPerPage, getData, currentPageData, navigation }) => {
  const pageNumbers = [];
  const showPagination = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPageState, setDataPerPageState] = useState();
  const [navigationState, setNavigationState] = useState(false);
  const [showPaginationState, setShowPaginationState] = useState(showPagination)



  for (let i = 1; i <= Math.ceil(getData.length / dataPerPageState); i++) {
    pageNumbers.push(i);
  }



  useEffect(() => {
    for (let i = 1; i <= 5; i++) {
      showPagination.push(i);
    }
  }, [])


  // update item on button chick


  useEffect(() => {
    // update right to left
    if (currentPage === showPaginationState.at(-1)) {
      if (showPaginationState.at(-1) === pageNumbers.at(-2)) {
        showPaginationState.shift();
        setShowPaginationState([...showPaginationState, currentPage + 1])
      }

      else if (showPaginationState.at(-1) <= pageNumbers.at(-3)) {
        showPaginationState.shift();
        showPaginationState.shift();
        setShowPaginationState([...showPaginationState, currentPage + 1, currentPage + 2])
      }
    }

    else if (currentPage === showPaginationState.at(-2)) {
      if (showPaginationState.at(-2) === pageNumbers.at(-2)) {
        setShowPaginationState([...showPaginationState])
      }
      else if (showPaginationState.at(-1) <= pageNumbers.at(-1)) {
        showPaginationState.shift();
        setShowPaginationState([...showPaginationState, currentPage + 2])
      }

    }


    //  update left to right 
    if (pageNumbers.at(1)  <= showPaginationState.at(0)) {
     
      if(pageNumbers.at(1) === currentPage){
        showPaginationState.unshift( currentPage - 1);
        showPaginationState.pop();
      }
      else if (showPaginationState.at(0) === currentPage) {
        showPaginationState.unshift(currentPage - 2, currentPage - 1);
        showPaginationState.pop();
        showPaginationState.pop();
      }
      else if (currentPage === showPaginationState.at(1)) {
          showPaginationState.unshift(currentPage - 2);
          showPaginationState.pop();
        }
    
    }
  
  }, [currentPage, ])





  console.log(showPaginationState)







  //  initialize page data
  useEffect(() => {
    if (!dataPerPage) {
      setDataPerPageState(10);
    } else {
      setDataPerPageState(dataPerPage);
    }
  }, [dataPerPage]);

  // Navigation State Update
  useEffect(() => {
    setNavigationState(navigation);
  }, [navigation]);

  // Get current Data
  const indexOfLastPost = currentPage * dataPerPageState;
  const indexOfFirstPost = indexOfLastPost - dataPerPageState;
  const NewCurrentPageData = getData.slice(indexOfFirstPost, indexOfLastPost);


  useEffect(() => {
    currentPageData(NewCurrentPageData);
  }, [currentPage, dataPerPageState, getData]);

  const handleCurrentPage = (pageNumber) => {
    setCurrentPage(pageNumber);

  }

  const handleDirectFirstPage = () =>{
    setShowPaginationState([1, 2, 3, 4, 5])
  }


  const handleDirectLastPage = () => {
    setShowPaginationState([pageNumbers.at(-5), pageNumbers.at(-4), pageNumbers.at(-3), pageNumbers.at(-2), pageNumbers.at(-1)])
  }






  if (pageNumbers.length > 10) {
    return (
      <nav>
        <ul className="pagination">

          {/* preview navigation  */}
          {navigationState &&
            (currentPage === 1 ? (
              <li className="pageItem">
                <button className="pageButton">P-</button>
              </li>
            ) : (
              <li className="pageItem">
                <button
                  onClick={() => handleCurrentPage(currentPage - 1)}
                  className="pageButton"
                >
                  P+
                </button>
              </li>
            ))}



              {/* first page  */}
              {
                showPaginationState.at(0) > pageNumbers.at(0)&&
                
               <Fragment>
                  <li className="pageItem">
                <button
                  onClick={() => {handleCurrentPage(pageNumbers.at(0)); handleDirectFirstPage()}}
                  className={
                    currentPage === pageNumbers.at(0)
                      ? "pageButton activeButton"
                      : "pageButton"
                  }
                >
                  {pageNumbers.at(0)}
                </button>
              </li>

              <li className="pageItem">
                <button className="pageButton">
                  .....
                </button>
              </li>
               </Fragment>
}
              {showPaginationState.map((number) => (
                <li key={number} className="pageItem">
                  <button
                    onClick={() => handleCurrentPage(number)}
                    className={
                      currentPage === number
                        ? "pageButton activeButton"
                        : "pageButton"
                    }
                  >
                    {number}
                  </button>
                </li>
              ))}


              {/* Lase Page  */}
              { 
              showPaginationState.at(-1) < pageNumbers.at(-1) &&
               <Fragment>
                  <li className="pageItem">
                <button className="pageButton">
                  .....
                </button>
              </li>
                  <li className="pageItem">
                <button
                  onClick={() =>{ handleCurrentPage(pageNumbers.at(-1)); handleDirectLastPage()}}
                  className={
                    currentPage === pageNumbers.at(-1)
                      ? "pageButton activeButton"
                      : "pageButton"
                  }
                >
                  {pageNumbers.at(-1)}
                </button>
              </li>
               </Fragment>
              }


        

          {/* {pageNumbers.map((number) => (
            <li key={number} className="pageItem">
              <button
                onClick={() => handleCurrentPage(number)}
                className={
                  currentPage === number
                    ? "pageButton activeButton"
                    : "pageButton"
                }
              >
                {number}
              </button>
            </li>
          ))} */}


          {/* next navigation  */}
          {navigationState &&
            (currentPage === pageNumbers.at(-1) ? (
              <li className="pageItem">
                <button className="pageButton">N-</button>
              </li>
            ) : (
              <li className="pageItem">
                <button
                  onClick={() => handleCurrentPage(currentPage + 1)}
                  className="pageButton"
                >
                  N+
                </button>
              </li>
            ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="pageItem">
            <button
              onClick={() => handleCurrentPage(number)}
              className={
                currentPage === number
                  ? "pageButton activeButton"
                  : "pageButton"
              }
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SweetPagination;
