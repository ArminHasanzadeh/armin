import React from 'react';
import './Footer.css'
import instagram from '../../public/icons8-instagram-50.png'
import GitHub from '../../public/icons8-github-48.png'
import Linkdin from '../../public/icons8-linkedin-50.png'
function Footer() {
    return (
        
    <footer className='flex justify-center items-center mt-50!'>
        <div class="footer-content">
            <p>Armin Hasanzadeh</p>
            <p>frontend developer</p>
            <div class="social-icons">
                <a href="https://www.linkedin.com/in/armin-hasanzadeh-687554333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" aria-label="LinkedIn">
                    <img src={Linkdin} alt="LinkedIn" width="40"/>
                </a>
                <a href="https://github.com/ArminHasanzadeh" target="_blank" aria-label="GitHub">
                    <img src={GitHub} alt="GitHub" width="40"/>
                </a>
                <a href="https://www.instagram.com/armin__hasnzadeh" target="_blank" aria-label="Instagram">
                    <img src={instagram} alt="Instagram" width="40"/>
                </a>
            </div>
        </div>
    </footer>
        
    );
}

export default Footer;