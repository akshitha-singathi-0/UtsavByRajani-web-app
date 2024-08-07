import React, { useState } from 'react';
import ResponsiveGallery from 'react-responsive-gallery';
import image_data from '../data/image_data.json';

const Gallery = () => {
    
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [filteredData, setFilteredData] = useState(image_data);

    const handleSelectedFilter = (filter) => {
        setSelectedFilter(filter);
        const data_after_filtering = filter === 'all' ? image_data : image_data.filter(item => item.eventType === filter);
        setFilteredData(data_after_filtering);
    }

    return (
        <div>
            <h1 class="pageHeader">Gallery</h1>
            <div>
                <button className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Filter by
                    </a>
                    <ul className="dropdown-menu">                    
                    <li><a className="dropdown-item" href="#" onClick={() => handleSelectedFilter('all')}>All</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleSelectedFilter('wedding')}>Wedding Events</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleSelectedFilter('arangetram')}>Arangetram/Rangapravesam</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleSelectedFilter('party')}>Birthday parties</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleSelectedFilter('other')}>Other</a></li>
                    </ul>
                </button>
            </div>
            <div>
                <ResponsiveGallery media={filteredData}></ResponsiveGallery>
            </div>
        </div>
    );
}

export default Gallery;