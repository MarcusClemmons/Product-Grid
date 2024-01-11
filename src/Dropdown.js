import React, { useState } from 'react';

function Dropdown({ onSortChange }) {
    const [sortOrder, setSortOrder] = useState('');

    const handleSortChange = (e) => {
        const order = e.target.value;
        setSortOrder(order);
        onSortChange(order);
    };

    return (
        <div>
            <label htmlFor="AlphabeticalOrder">Alphabetical Order:</label>
            <select id="AlphabeticalOrder" value={sortOrder} onChange={handleSortChange}>
                <option value="">Choose one</option>
                <option value="A to Z">A to Z</option>
                <option value="Z to A">Z to A</option>
            </select>
        </div>
    );
}

export default Dropdown;

