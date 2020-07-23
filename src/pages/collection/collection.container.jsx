import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import CollectionPage from '../../pages/collection/collection.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import {selectIsCollectionsLoaded} from '../../redux/collections/collections.selectors';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
})



const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage))

export default CollectionPageContainer;
