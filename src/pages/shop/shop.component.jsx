import React from "react";
import SHOP_DATA from "./shop.data.js";
import "./shop.styles.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherItemProps }) => (
          <CollectionPreview key={id} {...otherItemProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
