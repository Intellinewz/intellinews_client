// ADD AND REMOVE TONE
let initialState = {};

export default (state = initialState, action) => {
  
  let { type, payload } = action;

  switch (type) {
    case 'ADD_TONE': 
      return Object.assign({}, state, payload);
    
    default:
      return state;
  }
};