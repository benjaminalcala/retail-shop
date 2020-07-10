import collectionActionTypes from './collections.types';

export const updateCollections = collections => ({
    type: collectionActionTypes.UPDATE_COLLECTIONS,
    payload: collections
})