export const addToFeed = payload => {
  return {
    type: 'ADD_TO_FEED',
    payload: payload,
  };
};

export const deleteFeed = () => {
  return {
    type: 'DELETE_FEED',
  };
};