import React from "react";
import  Logo from "../../resources/logo.png";
import "./Header.css";

const Header = () => {
    const Linko = ({text}, {address}, id) => {
        return(
        <span className="links" onClick={(address)=>window.location.replace(address)} id={id}>
            {text}
        </span>
        );    
    }
    return(
        <div className="container" id="parent">
            <div className="row" id="linkos">
            <img src={Logo} id="logo"/>
            <div  id ="button"><Linko id="butt" text={"Sign Up"} address={"ehe"}/></div>
            <div id="darko">
                <span>meow</span>
            </div>
            
            
            </div>
        </div>
    );
}

export default Header;


