import React, { useState } from 'react';

function SideNav({ onFilter }) {
    const [selectedArtist, setSelectedArtist] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');

    const handleFilterChange = () => {
        // Ensure onFilter is defined and passed as a prop
        if (onFilter) {
            const filters = {};

            if (selectedArtist) {
                filters.artist = selectedArtist;
            }

            if (selectedPrice) {
                filters.price = selectedPrice;
            }

            onFilter(filters); // Pass the filters to the parent
        } else {
            console.error("onFilter is not a function");
        }
    };

    return (
        <div className="side-nav">
            <h3>Filters</h3>
            <div>
                <label>Artist:</label>
                <select
                    value={selectedArtist}
                    onChange={(e) => setSelectedArtist(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="Robb">Robb</option>
                    <option value="Chanshali Bia">Chanshali Bia</option>
                    <option value="Leo Lewis">Leo Lewis</option>
                    {/* Add more options as needed */}
                </select>
            </div>
            <div>
                <label>Price:</label>
                <select
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(Number(e.target.value))}
                >
                    <option value="">All</option>
                    <option value="5000">Up to ₹5000</option>
                    <option value="10000">Up to ₹10000</option>
                    <option value="20000">Up to ₹20000</option>
                </select>
            </div>
            <button onClick={handleFilterChange}>Apply Filters</button>
        </div>
    );
}

export default SideNav;
