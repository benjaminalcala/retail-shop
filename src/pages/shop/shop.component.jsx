import React, {useEffect} from 'react';

import {connect} from 'react-redux';
import {Route} from 'react-router-dom';


import {fetchCollectionsStart} from '../../redux/collections/collections.actions'


import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';



const ShopPage = ({fetchCollectionsStart, match}) => { 
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart])
  
        
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    )
    
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: ()=> dispatch(fetchCollectionsStart())
})


export default connect(null, mapDispatchToProps)(ShopPage);