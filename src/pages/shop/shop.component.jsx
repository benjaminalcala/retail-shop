import React from 'react';

import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';

import {updateCollections} from '../../redux/collections/collections.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collection/collection.component';

const WithSpinnerCollectionOverview = WithSpinner(CollectionOverview);
const WithSpinnerCollectionPage = WithSpinner(CollectionPage);



class ShopPage extends React.Component{ 
    state = {
        isLoading: true
    }

    unsubscribeFromSnapshot = null

    componentDidMount(){
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({isLoading: false})
        } )



    }

    render(){
        const {match} = this.props;
        const {isLoading} = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <WithSpinnerCollectionOverview isLoading={isLoading} {...props}/>} />
                <Route exact path={`${match.path}/:collectionId`} render={(props) => <WithSpinnerCollectionPage isLoading={isLoading} {...props} />} />
            </div>
        )
    }
    
  
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})


export default connect(null, mapDispatchToProps)(ShopPage);