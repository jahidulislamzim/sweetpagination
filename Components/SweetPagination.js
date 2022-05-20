import React, {Fragment, useEffect, useState } from "react";
import "./Components/SweetPagination.css";

const SweetPagination= ({ dataPerPage, getData, currentPageData, navigation, getStyle }) => {
  const pageNumbers = [];
  const showPagination = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPageState, setDataPerPageState] = useState();
  const [navigationState, setNavigationState] = useState(false);
  const [showPaginationState, setShowPaginationState] = useState([1,2,3,4,5]);
  const [style, setStyle]=useState('');
  const [styleCustom, setStyleCustom] = useState('');
  const [newPageData, setNewPageData] = useState([1,2,3,4,5]);



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
    if (pageNumbers.at(1) <= showPaginationState.at(0)) {

      if (pageNumbers.at(1) === currentPage) {
        showPaginationState.unshift(currentPage - 1);
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

  }, [currentPage])

  //  initialize page data
  useEffect(() => {
    if (!dataPerPage) {
      setDataPerPageState(10);
    } else {
      setDataPerPageState(dataPerPage);
    }
  }, [dataPerPage, getData]);

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
    if(pageNumbers.length > 10){
      setNewPageData(NewCurrentPageData)
    }
  }, [currentPage, dataPerPageState, getData]);



useEffect(()=>{
  if(newPageData.length===0){
        showPaginationState.pop();
        setCurrentPage(showPaginationState.at(-1))
  }
},[newPageData.length===0])




  const handleCurrentPage = (pageNumber) => {
    setCurrentPage(pageNumber);

  }

  const handleDirectFirstPage = () => {
    setShowPaginationState([1, 2, 3, 4, 5])
  }

  const handleDirectLastPage = () => {
    setShowPaginationState([pageNumbers.at(-5), pageNumbers.at(-4), pageNumbers.at(-3), pageNumbers.at(-2), pageNumbers.at(-1)])
  }


  // button style section 

  useEffect(()=>{
    if(!getStyle){
      setStyle('sweetPagination')
      setStyleCustom('')
    }
    else if(getStyle && getStyle !== 'style-custom'){
      setStyle(getStyle)
      setStyleCustom('')
    }
    else if(getStyle === 'style-custom'){
      setStyleCustom('style-custom')
    }
  
  },[getStyle])


// Main button function 

if (pageNumbers.length > 10) {
  return (
    <nav className={`sweetPagination ${style}`}>
      <ul className="paginationUL">

        {/* preview navigation  */}
        {navigationState &&
          (currentPage === 1 ? (
            <li className="pageItem">
              <button className="pageButton commonButtonStyle leftNavigation">
              <svg className="navigationIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"> <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" /></svg>
              </button>
            </li>
          ) : (
            <li className="pageItem">
              <button
                onClick={() => handleCurrentPage(currentPage - 1)}
                className="pageButton commonButtonStyle leftNavigation"
              >
                <svg className="navigationIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"> <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" /></svg>
              </button>
            </li>
          ))}



        {/* first page  */}
        {
          showPaginationState.at(0) > pageNumbers.at(0) &&

          <Fragment>
            <li className="pageItem">
              <button
                onClick={() => { handleCurrentPage(pageNumbers.at(0)); handleDirectFirstPage() }}
                className={
                  currentPage === pageNumbers.at(0)
                    ? "pageButton activeButton"
                    : "pageButton commonButtonStyle"
                }
              >
                {pageNumbers.at(0)}
              </button>
            </li>

            <li className="pageItem">
              <button className="pageButton commonButtonStyle">
              <svg className="dottedIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg> 
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
                  ? `pageButton activeButton commonButtonStyle`
                  : `pageButton commonButtonStyle ${styleCustom}`
              }
            >
              {number}
            </button>
          </li>
        ))}


        {/* Lase Page  */}
        {
          showPaginationState.at(-1) < pageNumbers.at(-1) &&
          <>
            <li className="pageItem">
              <button className="pageButton commonButtonStyle">
                <svg className="dottedIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </button>
            </li>
            <li className="pageItem">
              <button
                onClick={() => { handleCurrentPage(pageNumbers.at(-1)); handleDirectLastPage() }}
                className={
                  currentPage === pageNumbers.at(-1)
                    ? "pageButton activeButton"
                    : `pageButton commonButtonStyle ${styleCustom}`
                }
              >
                {pageNumbers.at(-1)}
              </button>
            </li>
          </>
        }



        {/* next navigation  */}
        {navigationState &&
          (currentPage === pageNumbers.at(-1) ? (
            <li className="pageItem">
              <button className="pageButton commonButtonStyle rightNavigation">
              <svg className="navigationIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" /></svg>
              </button>
            </li>
          ) : (
            <li className="pageItem">
              <button
                onClick={() => handleCurrentPage(currentPage + 1)}
                className="pageButton commonButtonStyle rightNavigation"
              >
                <svg className="navigationIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" /></svg>
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
};

  return (
    <nav className={`sweetPagination ${style}`}>
      <ul className="paginationUL">
        {pageNumbers.map((number) => (
          <li key={number} className="pageItem">
            <button
              onClick={() => handleCurrentPage(number)}
              className={
                currentPage === number
                  ? "pageButton activeButton commonButtonStyle"
                  : `pageButton commonButtonStyle ${styleCustom}`
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
