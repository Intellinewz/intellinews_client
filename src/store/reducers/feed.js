// ADD REMOVE ARTICLES FROM FEED
let initialState = [];

export default (state = initialState, action) => {
  
  let { type, payload } = action;
  
  switch (type) {
    
    case ('ADD_TO_FEED'):
      return [...payload];
    
    default: 
      return state;
  }
};