import React, { useState,useEffect } from 'react'; 
import Classes from './App.module.css';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const Photo1 = () =>{
   
   const[image,setimage] = useState(0);
   const images = [
    "https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg"

];
  
   useEffect(() => {
    setInterval(()=>{
        setimage((image)=>(image +1)%5);
       
    },3000)
  },[]);

return(
    <div className={Classes.iphone2}>
    
    {/* <img src="https://purepng.com/public/uploads/large/purepng.com-iphone-appleiphone-appleiphoneappleapple-inciosmobile-1701528352660hcpf8.png" width="320" className={Classes.op1}/> */}
    
    {/* <img src="https://purepng.com/public/uploads/large/purepng.com-apple-iphone-xappleapple-iphonephonesmartphonemobile-devicetouch-screeniphone-xiphone-10electronicsobjects-2515306895701eqxj.png" width ="550" height="470" className={Classes.op2}/> */}
     <div  className={Classes.inner}  >
     
              <img src={images[image]} className={Classes.op1}/>
            </div>
          </div>
) 
}

export {Photo1}
// https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg
// https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg
// https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg
// https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg
// https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg