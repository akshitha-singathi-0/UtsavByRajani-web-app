import React from 'react';
import ResponsiveGallery from 'react-responsive-gallery';
import image_data from '../data/image_data.json';

const data_by_filter = image_data.filter(item => item.eventType === 'wedding');

const Gallery = () => {
    return (
        <div>
            <h1 class="pageHeader">Gallery</h1>
            <div>
                <button className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Filter by
                    </a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Wedding Events</a></li>
                    <li><a className="dropdown-item" href="#">Arangetram/Rangapravesam</a></li>
                    <li><a className="dropdown-item" href="#">Birthday parties</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Other</a></li>
                    </ul>
                </button>
            </div>
            <div>
                <ResponsiveGallery media={data_by_filter}></ResponsiveGallery>
            </div>
        </div>
    );
}

export default Gallery;