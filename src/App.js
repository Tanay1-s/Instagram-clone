import logo from './logo.svg';
import React from 'react';
import Classes from './App.module.css';
import {Form} from './Form';
import {Photo} from './Photo';
import {Photo1} from './Photo1';
import {Photo2} from './Photo2';
import {Footer} from './Footer';

class App extends React.Component {
  
  render() {
  return (
    <div className="App">
     <div className={Classes.maind}>
       <div1 className={Classes.photo}>
        <Photo/>
        <Photo1/>

       </div1>
       <div2 className={Classes.otdetails}>
         <Form/> 
       </div2>
    </div>
    <div className={Classes.footer}>
          <Footer/>
    </div>
    </div>
  );
}
}

export default App;
