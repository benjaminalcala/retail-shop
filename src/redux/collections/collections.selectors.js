import {createSelector} from 'reselect';

const selectCollections = state => state.collections

export const selectCollectionsData = createSelector(
    [selectCollections],
    collections => collections.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollectionsData],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlKey => createSelector(
    [selectCollectionsData],
    collections => collections[collectionUrlKey]
)
