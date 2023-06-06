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
                <img src={Logo} id="logo" alt="Notable"/>
            <div  id ="button">
                <Linko id="butt" text={"Sign Up"} address={"ehe"}/>
            </div>
            <div id="darko">
                <input type="checkbox" class="checkbox" id="checkbox"/>
                    <label for="checkbox" class="checkbox-label">
                        <span class="ball"></span>
                    </label>
            </div>
            </div>
        </div>
    );
}

export default Header;


