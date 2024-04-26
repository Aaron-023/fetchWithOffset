import { store } from './storeData.js'
import { refineData } from './refineData.js';

export async function getPaginatedData(url, brandName, offset = 0){
  
  try {
    const response = await fetch(`${url}?offset=${offset}`);
    
    // If response.ok is false, print the various status values
    if(response.status !== 200){ 
      console.log(`There was a problem fetching:\n Status Text: ${response.statusText}\n Status: ${response.status}\n Start URL was: ${url}.`);
    };

    // Handling the response
    const data = await response.json();
    const allAds = data.totalFound;
    
    //offset logic required for recursive API calls
    if(offset <= allAds){
      store(data);
      offset += 100;
      await getPaginatedData(url, brandName, offset);
    } else {
      refineData(brandName);
    }
    //invoke reineData when all data retrived from recursive API calls
  }
  catch(error) {
    console.log(`Error: ${error}`);
  };
};