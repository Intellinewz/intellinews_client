export const getCache = key => {

  let payload = JSON.parse(localStorage.getItem(key));
  
  if (payload) { 
    let expired = isExpired(payload);
    return expired ? null : payload;
  } else {
    return null;
  }
};

const isExpired = payload => {
  let currentTime = new Date().getTime();
  let difference = currentTime - payload.cacheTime;
  return difference >= 3000000 ? true : false;
};