import React from 'react';
import { connect } from 'react-redux';

import { selectShopCollection} from '../../redux/shop/shop.selectors';

import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';


const CollectionPage = ({collections}) => {
    const { items, name } = collections;
    return (
        <div className="collection-page">
            <h2 className="title">{name}</h2>
            <div className="items">
                {
                    items.map(item => 
                        <CollectionItem key={item.id} item={item} />
                    )
                }
            </div>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => ({
    collections: selectShopCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);