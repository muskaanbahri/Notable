import React from "react";
import "./Longmenu.css";
const Longmenu = () =>{

    const Menuu = ({text}, {address}) => {
        return(
        <span className="links" onClick={(address)=>window.location.replace(address)}>
            {text}
        </span>
        );    
    }

    return (
        <div className="Menu" id="menuparent">
            <div className="column" id="menuitem">
            <Menuu text={"Hello"} address={"ehe"}/>
            <Menuu text={"Hello"} address={"ehe"}/>
            <Menuu text={"Hello"} address={"ehe"}/>
            <Menuu text={"Hello"} address={"ehe"}/>
            </div>
        </div>
    );
}
export default Longmenu;