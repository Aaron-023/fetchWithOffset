import { getPaginatedData } from "./processStartingUrls.js";
import { baseUrl } from "../config/clientStartingUrl.js";
import { resetStoredDataArray } from "./resetStoredDataArray.js";

// Loop through Smart Recruiters Brands and call the smartRecruitersBaseUrl with variable
export const getTargetUrl = async (clientNames) => {
    for (const name of clientNames) {

        const client = {
            name: name,
            brand: name
        };

        await getPaginatedData(baseUrl(client.name), client.brand);
        resetStoredDataArray();
    };
};