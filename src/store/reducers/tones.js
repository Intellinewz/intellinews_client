// ADD AND REMOVE TONE
let initialState = [];

export default (state = initialState, action) => {
  
  let { type, payload } = action;

  switch (type) {
    case 'ADD_TONE':
      return [...state, payload];

    case 'DELETE_TONE':
      return state.filter(tone => tone !== payload);
    
    default:
      return state;
  }
};