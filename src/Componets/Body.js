import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { featchData } from '../redux/thunk';
import Table from './Table';

const Body = () => {
  const dispatch = useDispatch();
  const { data, searchTerm, sortBy } = useSelector(state => state);

  useEffect(() => {
    dispatch(featchData);
  }, []);

  if (!data) return <h1>Loading ...</h1>;

  // Filter and sort data based on Redux state
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    switch (sortBy) {
      case 'market_cap_desc':
        return b.market_cap - a.market_cap;
      case 'percentage_desc':
        return b.price_change_percentage_24h - a.price_change_percentage_24h;
      default:
        return 0;
    }
  });

  return (
    <div className="table">
      {sortedData.map(product => (
        <Table data={product} key={product.id} />
      ))}
    </div>
  );
};

export default Body;

