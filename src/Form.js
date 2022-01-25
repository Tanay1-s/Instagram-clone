import React from 'react'; 
import Classes from './Appa.module.css';

const Form = () =>{
    return(

   <div className={Classes.whole}>
            <div className={Classes.container}>
        <div className={Classes.box}>
            <div className={Classes.heading}></div>
            <form className={Classes.loginform}>
                <div className={Classes.field}>
                    <input id="username" type="name" placeholder="Phone number, username, or email" />
                    <label for="username">Phone number, username, or email</label>
                </div>
                <div className={Classes.field}>
                    <input id="password" type="password" placeholder="password" />
                    <label for="password">Password</label>
                </div>
                <button className={Classes.loginbutton} title="login">Log In</button>
                <div className={Classes.separator}>
                    <div className={Classes.line}></div>
                    <p>OR</p>
                    <div className={Classes.line}></div>
                </div>
                <div className={Classes.other}>
                    <button className={Classes.fbloginbtn} type="button">
                        {/* <i className="fa fa-facebook-official fb-icon"></i> */}
                        <span className={Classes.face}>Log in with Facebook</span>
                    </button>
                    <a className={Classes.forgotpassword} href="#">Forgot password?</a>
                </div>
            </form>
        </div>
        <div className={Classes.box}>
            <p>Don't have an account? <a class="signup" href="#">Sign Up</a></p>
        </div>
        <p className={Classes.get}>Get the app.</p>
    </div>
    <div className={Classes.p2}>
    <div className={Classes.p1}>
        <img ClassName={Classes.install} src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"></img>
        <img ClassName={Classes.install} src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"></img>   
        </div>
    </div>
   </div>


    )
    }

    export{Form}