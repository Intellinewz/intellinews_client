import superagent from 'superagent';
import { getCache } from '../lib/getCache.js';

export const retrieveFeed = async tones => {

  let feed = getCache('intellinewz.feed');

  if (feed) { 
    return tones && tones.length ? feed.feed.filter(article => tones.includes(article.dom_tone.toLowerCase())) : feed.feed;
  }
  else {
    let query = tones && tones.length ? `?pref=${tones.join('+')}` : '';
    let url = `${process.env.REACT_APP_API_URL}feed/${query}`;
    let res = await superagent.get(url);
    
    /* SETTING TIME OF CACHE FOR VALIDATION PURPOSES */
    res.body.cacheTime = new Date().getTime();
    
    localStorage.setItem('intellinewz.feed', JSON.stringify(res.body));
    
    return res.body.feed;
  }


  
};