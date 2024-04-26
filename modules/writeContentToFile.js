// This module writes the retrived client payloads to file.
import fs from 'fs';

export const writeContentToFile = (dataToWrite, brandName) => {
    const data = JSON.stringify(dataToWrite) 
    
    try { 
        fs.writeFileSync(`../jsonPayloads/${brandName}.json`, data);
        console.log(`${brandName}'s json has been written to the directory.`);
    }
    catch(err) {
        console.log(`Error writing ${brandName}'s json to the directory:`, err);
    }
}