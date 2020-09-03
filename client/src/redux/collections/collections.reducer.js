

import collectionActionTypes from './collections.types';

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: ''
}

const collectionsReducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        case collectionActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case collectionActionTypes.FETCH_COLLECTIONS_SUCCESS: 
            return {
                ...state,
                collections: action.payload,
                isFetching: false
            }
        case collectionActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                isFetching: false
                
            }
        default:
            return state;
    }
}

export default collectionsReducer