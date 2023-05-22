import React, {useState} from "react";
import HomePage from "HomePage";


 function Website() {
  const [currentPage, setCurrentPage] = useState('HomePage');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
     if (currentPage === 'HomePage') {
      return <HomePage />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if(currentPage === 'Contact'){
    return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="page-container">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />

    </div>
  );
};

export default Website;