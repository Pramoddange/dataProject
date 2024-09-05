

export const SET_SEARCH_TERM = {
    SET_SEARCH_TERM:"SET_SEARCH_TERM"
}
export const SET_SORT_BY ={

 SET_SORT_BY:"SET_SORT_BY"
}

export const setSearchTerm = (term) => ({
  type: "SET_SEARCH_TERM",
  payload: term
});

export const setSortBy = (criteria) => ({
  type: "SET_SORT_BY",
  payload: criteria
});

export const actions = {
    DATA_SUCCESS: "DATA_SUCCESS"
}