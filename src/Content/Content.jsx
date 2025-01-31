import React from 'react';
import './Content.css'
import Games from './Games/Games.jsx';

function Content() {
    return (
        <section className='w-[100%] h-[250vh] flex bg-white Cont '> 
            <Games />
        </section>
    );
}

export default Content;