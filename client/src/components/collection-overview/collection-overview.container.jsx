import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectIsFetchingCollections} from '../../redux/collections/collections.selectors';


import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetchingCollections
})

const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));

export default CollectionOverviewContainer;