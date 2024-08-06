import React from 'react';
import ResponsiveGallery from 'react-responsive-gallery';
import image_data from '../data/image_data.json';
/*
const media=[

{
src: 'https://cdn.pixabay.com/photo/2014/07/08/12/36/bird-386725_960_720.jpg'
},
{
src: 'https://cdn.pixabay.com/photo/2015/10/12/15/46/fallow-deer-984573_960_720.jpg'
},
{
src: 'https://cdn.pixabay.com/photo/2014/10/01/10/44/hedgehog-468228_960_720.jpg'
},
{
src: 'https://cdn.pixabay.com/photo/2013/09/22/15/29/prairie-dog-184974_960_720.jpg'
},
{
src: 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg'
},
{
src: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg'
},
{
src: 'https://cdn.pixabay.com/photo/2019/03/09/17/30/horse-4044547_960_720.jpg'
}
];
*/

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
                <ResponsiveGallery media={image_data}></ResponsiveGallery>
            </div>
        </div>
    );
}

export default Gallery;