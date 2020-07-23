import React from 'react';

import {connect} from 'react-redux';
import {Route} from 'react-router-dom';


import {fetchCollectionsStartAsync} from '../../redux/collections/collections.actions'


import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';



class ShopPage extends React.Component{ 
    

    componentDidMount(){
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }

    render(){
        const {match} = this.props;
   
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: ()=> dispatch(fetchCollectionsStartAsync())
})


export default connect(null, mapDispatchToProps)(ShopPage);