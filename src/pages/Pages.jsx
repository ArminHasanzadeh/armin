import React from 'react';
import './Pages.css'
import Slider from './Slider/Slider.jsx';
import PagesBar from './PagesBar/PagesBar.jsx';
function Pages() {
    return (
        <div  className='w-full h-[90vh] ' >
            <Slider />
            <PagesBar />
        </div>
    );
}

export default Pages;