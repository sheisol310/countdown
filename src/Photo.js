import './image.css';
import React, { useState, useEffect } from 'react';

import p1 from './img/p1.JPG'; 
import p2 from './img/p2.JPG'; 
import p3 from './img/p3.JPG'; 
import p4 from './img/p4.JPG'; 
import p5 from './img/p5.jpg'; 
import p7 from './img/p7.JPG'; 
import p8 from './img/p8.JPG'; 
import p9 from './img/p9.JPG'; 
import p10 from './img/p10.JPG'; 
import p11 from './img/p11.JPG'; 
import p12 from './img/p12.JPG'; 
import p13 from './img/p13.jpg'; 
import p14 from './img/p14.jpg'; 
import p16 from './img/p16.JPG'; 
import p17 from './img/p17.JPG'; 
import p18 from './img/p18.JPG'; 
import p19 from './img/p19.jpg'; 
import p20 from './img/p20.jpg'; 
import p21 from './img/p21.JPG'; 
import p22 from './img/p22.JPG'; 

export default function Photo() {

      const [currentIndex, setCurrentIndex] = useState(0);
      const photos = [p1, p2, p3, p4, p5, p7, p8, p9, p10, p11, p12, p13, p14, p16, p17, p18, p19, p20, p21, p22];
    
      
      useEffect(() => {
        document.body.className = 'bg';
        const interval = setInterval(() => {
          setCurrentIndex((currentIndex + 1) % photos.length);
        }, 2000);
        return () => clearInterval(interval);
      }, [currentIndex, photos.length]);

    return (
        <div className='imgbox'>
            <img src={photos[currentIndex]} style={{width: '90%'}} alt="Gallery" />
            {/* <img src={pic} width={500}  alt='HPY'  /> */}
        </div>
        
    ) 
    
}