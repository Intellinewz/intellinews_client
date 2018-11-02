import superagent from 'superagent';

export const retrieveFeed = async tones => {
  let query = `?pref=${tones.join('+')}`;
  let url = `${process.env.REACT_APP_API_URL}feed/${query}`;
  let res = await superagent.get(url);
  return res.body;
};