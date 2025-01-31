import React from 'react';
import './Nav.css'


function Nav() {
    return (
        <div className='flex justify-start items-center w-[80%] h-[100%] bg-white '>
            <ul className='flex justify-center items-center gap-9 font-black w[100%] '>
                <li><a href="">GamePass</a><span class="material-symbols-outlined">
keyboard_arrow_down
</span></li>
                <li><a href="">Game</a><span class="material-symbols-outlined">
keyboard_arrow_down
</span></li>
                <li><a href="">Devices</a><span class="material-symbols-outlined">
keyboard_arrow_down
</span></li>
                <li><a href="">Play</a></li>
                <li><a href="">Store</a><span class="material-symbols-outlined">
keyboard_arrow_down
</span></li>
                <li><a href="">Community</a><span class="material-symbols-outlined">
keyboard_arrow_down
</span></li>
                <li><a href="">Support</a><span class="material-symbols-outlined">
keyboard_arrow_down
</span></li>
                <li><a href="">My Xbox</a><span class="material-symbols-outlined">
keyboard_arrow_down
</span></li>
                <li><a href="">Deviloper</a><span class="material-symbols-outlined">
keyboard_arrow_down
</span></li>
            </ul>
        </div>
    );
}

export default Nav;