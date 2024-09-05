
import React from 'react';
import { useDispatch } from 'react-redux';
import '../style/navbar.css';
import { setSearchTerm, setSortBy } from '../redux/action';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const term = e.target.value;
    dispatch(setSearchTerm(term)); // Dispatch search term action
  };

  const handleSortByMarketCap = () => {
    dispatch(setSortBy('market_cap_desc')); // Dispatch sort by market cap action
  };

  const handleSortByPercentage = () => {
    dispatch(setSortBy('percentage_desc')); // Dispatch sort by percentage action
  };

  return (
    <div className="searchbar">
      <input
        placeholder="Search By Name or Symbol"
        onChange={handleSearchChange}
        aria-label="Search by name or symbol"
      />
      <button onClick={handleSortByMarketCap} aria-label="Sort by Market Cap">
        Sort By Mkt Cap
      </button>
      <button onClick={handleSortByPercentage} aria-label="Sort by Percentage">
        Sort by Percentage
      </button>
    </div>
  );
};

export default Navbar;
