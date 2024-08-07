import React, { useState } from 'react';
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import image_data from '../data/image_data.json';

const Gallery = () => {
    
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [filteredData, setFilteredData] = useState(image_data.map(item => item.pic));

    const handleSelectedFilter = (filter) => {
        setSelectedFilter(filter);
        const data_after_filtering = (filter === 'all') ? image_data : image_data.filter(item => item.eventType === filter);
        setFilteredData(data_after_filtering.map(item => item.pic));    
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
                { console.log(filteredData + " === ") }
                <ColumnsPhotoAlbum photos={filteredData} columns={3} />
            </div>
        </div>
    );
}

export default Gallery;