import SHOP_DATA from './collections.data';

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const collectionsReducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default collectionsReducer