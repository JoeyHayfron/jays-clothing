import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionPageContainer from '../collection/collections.container';
import './shop.styles.scss';

import { fetchCollectionsStart } from '../../redux/shop/shop.action';

import CollectionsOverviewContainer from './../../components/collections-overview/collections-overview.container';



class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          exact
          path={`${match.path}/:categoryId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
