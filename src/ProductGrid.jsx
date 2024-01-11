// ProductGrid.js
import React, { useState,  Fragment } from 'react';
import PriceFilter from './PriceFilter';
import products from './products';
import Card from './Card';
import classes from './Card.module.css';
import Dropdown from './Dropdown';

const ProductGrid = () => {
    const [maxPrice, setMaxPrice] = useState(Infinity);
    const [sortedProducts, setSortedProducts] = useState(products);

    const handlePriceChange = (price) => {
        setMaxPrice(price);
    };

    const handleSortChange = (sortOrder) => {
        if (sortOrder === 'A to Z') {
            setSortedProducts([...products].sort((a, b) => a.name.localeCompare(b.name)));
        } else if (sortOrder === 'Z to A') {
            setSortedProducts([...products].sort((a, b) => b.name.localeCompare(a.name)));
        } else {
            setSortedProducts(products);
        }
    };

    const filteredProducts = sortedProducts.filter(product => product.price <= maxPrice);

    return (
        <Fragment>
            <Dropdown onSortChange={handleSortChange} />
            <PriceFilter onPriceChange={handlePriceChange} />
            <br />
            <div className="products">
                {filteredProducts.map(product => (
                    <Card className={classes.card} key={product.id}>
                        <h3>{product.name}</h3>
                        <div>{product.Image}</div>
                        <p>${product.price}</p>
                    </Card>
                ))}
            </div>
        </Fragment>
    );
};

export default ProductGrid;
