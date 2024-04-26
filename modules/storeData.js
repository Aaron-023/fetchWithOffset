// This module stores all the data retrived by the processStartingUrls.js file. 
export const storedData = [];

export const store = (data) => {
    storedData.push(...data.content);
}