import React from 'react';
import './Games.css'
import sniper from '../../../public/sniper.jpg'
import gamepass from '../../../public/xbox game pass.jpg'
import controler from '../../../public/controler.jpg'
import ninja from '../../../public/ninja.jpg'
import console from '../../../public/console.jpg'


function Games() {
    return (

        //////////////card1////////////////////
        <section className='flex w-[100%] h-[100%] card1 gap-2 '>
            
            <section className='card2 w-[50%] h-[80%] '>

                    <div className='w-[100%] h-[58.4%] relative flex !mt-3 card3 justify-start items-end'>
                               <figure>
                                <img src={sniper} alt="" />
                                </figure>  
                                <div className='absolute figcap flex justify-start items-start flex-col '>
                                    <p className='text-ba w-43 font-bold play '>PLAY WITH GAME PASS</p>
                                    <h4 className='text-white text-5xl'>Sniper Elite: Resistance</h4>
                                    <p className='text-white text-[1.3rem]'>Take the fight behind enemy lines either alone or with an ally.</p>
                                        <button className='flex btn2'>
                                            <p className='text-white text-[1.2rem] font-bold'>GET IT NOW</p>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></span>
                                        </button>
                    </div>                       
                </div>
                    {/* ////////////////////////////////card2/////////////////////// */}
                
                
                <div className='w-[100%] h-[29.3%] flex overflow-hidden '>
                <figure className='w-[50%] h-[100%] flex overflow-hidden'>
                        <img src={ninja} alt="" className='hover:scale-105 transition-all duration-300'/>
                    </figure>
                    <div className='cap figcap  w-[50%] h-[100%] flex justify-center items-center flex-col'>
                    <h4 className='text-white text-3xl font-bold '>NINJA GAIDEN 2 Black </h4>
                    <p className='text-white text-[1.2rem]  '>Play the definitive edition of the orginal with Game Pass</p>
                    <button className='flex btn2 justify-start items-center '>
                        <p className='text-white text-[1rem] font-bold '>
                        GET IT NOW
                        </p>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                        </span>
                    </button>

                </div>
                   
            </div>
                <div className='w-[200.7%] h-[44.3%] border-2 mt-2! flex justify-end items-center'>
                    <figure>
                        <img src={console} alt="" />
                    </figure>
                    <div className='absolute figcap flex justify-start items-start flex-col '>
                                    
                                    <h4 className='text-white text-5xl'>Power Your Dreams</h4>
                                    <p className='text-white text-[1.3rem]'>Go rogue with Xbox Series X|S</p>
                                        <button className='flex btn4 justify-center items-center'>
                                            <p className=' text-[1.2rem] font-bold  flex justify-center items-center'>LEARN MORE </p>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></span>
                                            
                                        </button>
                    </div>  
                    
                </div>
                </section>
                  


            {/* /////////////////////////////////card3////////////////////////// */}
                <section className='card2 w-[50%] h-[80%] '>
                    <div className='w-[100%] h-[29.3%] flex overflow-hidden '>
                    <div className='cap figcap  w-[50%] h-[100%] flex justify-center items-center flex-col'>
                   
                    <h4 className='text-white text-3xl font-bold '>Dicover your next favorite game </h4>
                    <p className='text-white text-[1.2rem]  '>Play new games on day one. Enjoy hundreds of high-qulity games on console, PC, and cloud. Play together with friends.</p>
                    <button className='flex btn2 justify-start items-center '>
                        <p className='text-white text-[1rem] font-bold '>
                        JOIN NOW
                        </p>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                        </span>
                    </button>





                    {/* ///////////////////////////card4////////////////// */}
                </div>
                    <figure className='w-[50%] h-[100%] flex overflow-hidden'>
                        <img src={gamepass} alt="" className='hover:scale-105 transition-all duration-300'/>
                    </figure>
                    </div>
                    <div className='w-[100%] h-[58.4%] relative flex !mt-3 card3 justify-start items-end'>
                               <figure>
                                <img src={controler} alt="" />
                                </figure>  
                                <div className='absolute figcap flex justify-start items-start flex-col '>
                                    <p className='text-ba w-10 font-bold play '>NEW</p>
                                    <h4 className='text-white text-5xl'>Elevate your game</h4>
                                    <p className='text-white text-[1.3rem]'>Reveal the Xbox Wireless Controller-Pulse Cipher Special Edition</p>
                                        <button className='flex btn2'>
                                            <p className='text-white text-[1.2rem] font-bold'> LEARN MORE</p>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></span>
                                        </button>
                    </div>                       
                    </div>
             
            
                </section>
               
        </section>
    );
}

export default Games;