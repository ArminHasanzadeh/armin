import React from 'react';
import mic from "../../../../public/RE1Mu3b.png" 
import xbox from"../../../../public/RW4ESm.png"
import './Logoicon.css'
function Logoicon() {
    return (
        <div className='gap-10 w-[20%] h-[100%] flex justify-center items-center bg-white'>
            <figure className='img1 w-[30%] h-[40%] flex justify-center items-center '>
                <img src={mic} alt="" />
            </figure>
            <div className='borderr h-[60%] flex justify-center items-center '>

            </div>
            <figure className='w-[30%] h-[40%]  justify-center items-center'> 
                <img src={xbox} alt="" />
            </figure>
            
        </div>
    );
}

export default Logoicon;