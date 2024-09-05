import React from 'react'

import { actions, SET_SEARCH_TERM, SET_SORT_BY } from './action';

const initialState = {
  data:null,
  searchTerm: '',
  sortBy: 'market_cap_desc',
}
function reducer(state = initialState,action) {
    switch (action.type) {
        case actions.DATA_SUCCESS:
          return { ...state, data: action.payload };
    
        case SET_SEARCH_TERM.SET_SEARCH_TERM:
          return { ...state, searchTerm: action.payload };
    
        case SET_SORT_BY.SET_SORT_BY:
          return { ...state, sortBy: action.payload };
    
        default:
          return state;
      }
}


export default reducer
