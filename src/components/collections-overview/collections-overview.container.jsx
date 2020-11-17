import { connect } from 'react-redux';
import {compose} from 'redux';
import { createStructuredSelector } from 'reselect';
import WithSpinner from './../with-spinner/with-spinner.component';
import { selectIsCollectionFetching } from './../../redux/shop/shop.selector';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer