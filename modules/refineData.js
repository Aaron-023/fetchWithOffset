// This module refines the stored data in storeData.js
import { storedData } from "./storeData.js";
import { processRefinedData } from "./gatherRefinedUrls.js";

export const refineData = (brandName) => {
    const refinedData = [];
        storedData.forEach((item) => {
            refinedData.push(item.ref);
        })
    // Send the refined data for processing.
    processRefinedData(refinedData, brandName);
}