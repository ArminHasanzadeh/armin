import React from 'react';
import Nav from './Nav/Nav.jsx';
import Logoicon from './logo icon/Logoicon.jsx'

function Heder() {
    return (
        <div className='flex w-[100%] h-[54px]'>
         <Logoicon />
        <Nav /> 
        </div>
    );
    
}

export default Heder;