import React from 'react'; 
import Classes from './App.module.css';



const Footer = () =>{
return(
    <div className={Classes.footerw}>
    <div className={Classes.footera}>
    
        <p>Meta</p>
        <p>About</p>
        <p>Blog</p>
        <p>jobs</p>
        <p>Help</p>
        <p>API</p>
        <p>Privacy</p>
        <p>Terms</p>
        <p>Top accounts</p>
        <p>Hashtags</p>
        <p>Locations</p>
        <p>Instagram Lite</p>
    
</div>
<div className={Classes.footerb}>
        <p>Beauty</p>
        <p>Dance</p>
        <p>Fitness</p>
        <p>Food & drink</p>
        <p>Home & garden</p>
        <p>Music</p>
        <p>Visual arts</p>
</div>
<div className={Classes.footerc}>
<select name="English" className={Classes.fdrop} >
    <option value="English">English</option>
    <option value="Polski">Polski</option>
    <option value="Portuguse">Portuguse</option>
    <option value="English(U.k.)">English(U.k.)</option>
  </select>
  <p>© 2022 Instagram from Meta</p>
</div>
</div>
)
}
export {Footer}
