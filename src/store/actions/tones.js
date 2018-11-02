export const addTone = payload => {
  return {
    type: 'ADD_TONE',
    payload: payload,
  };
};

export const deleteTone = payload => {
  return {
    type: 'DELETE_TONE',
    payload: payload,
  };
};