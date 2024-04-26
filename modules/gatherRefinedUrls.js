// This module takes the result of the refineData module, and fetches all urls.

import axios from "axios";
import { writeContentToFile } from "./writeContentToFile.js";

export const processRefinedData = async (refinedUrls, brandName) => {
  const jobs = [];

    try {
      for (const url of refinedUrls) {

        await axios.get(url).then((response) => {

          if(response.statusText !== "OK" || (response.status !== 200)){
            console.log(`There was an error with the response: ${response.status}, ${response.statusText}.`)
          }

          // const data = response.data;
          jobs.push(response.data);

        })
        .catch((error) => {
          console.log(`There was an error with the reponse via axios.get with url: ${url}. The error is: ${error}`);
        })
      }
    } catch (error) {
      console.log(`There was an error when trying looping through all the array of urls: `, error);
    }
    
writeContentToFile(jobs, brandName);
}