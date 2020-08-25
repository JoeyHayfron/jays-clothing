import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import './shop.styles.scss';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        exact
        path={`${match.path}/:categoryId`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
