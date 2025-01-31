import React from 'react';
import './PagesBar.css'
import img1 from '../../../public/img1.svg'
import img2 from '../../../public/img2.svg'
import img3 from '../../../public/img3.svg'
import img4 from '../../../public/img4.svg'
import img5 from '../../../public/img5.svg'
import img6 from '../../../public/img6.svg'
function PagesBar() {
    return (
        <div className='img1 w-[100%] h-[20%] flex justify-center items-center'>
            <ul className='w-full h-fit flex justify-center items-center font-bold text-xl'>
                <li>
                    <img className='size-25' src={img1} alt="" />
                    <figcaption>SIGH IN</figcaption>
                </li>
                <li>
                    <img className='size-25' src={img2} alt="" />
                    <figcaption>GAME PASS</figcaption>
                </li>
                <li>
                    <img className='size-25' src={img3} alt="" />
                    <figcaption>CONSOLES</figcaption>
                </li>
                <li>
                    <img className='size-25' src={img4} alt="" />
                    <figcaption>PLAY</figcaption>
                </li>
                <li>
                    <img className='size-25' src={img5} alt="" />
                    <figcaption>GAME</figcaption>
                </li>
                <li>
                    <img className='size-25' src={img6} alt="" />
                    <figcaption>ACCESSORISE</figcaption>
                </li>
            </ul>
        </div>
    );
}

export default PagesBar;