// This module resets the storedData array. This is so all brands can be saved to their own files.

import { storedData } from './storeData.js';

export const resetStoredDataArray = () => {
    storedData.length = 0;
}