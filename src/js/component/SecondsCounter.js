import React from "react";
import "../../styles/SecondsCounter.css"

const SecondsCounter = (props) =>{
    // Convertimos el número en un array de caracteres
    const secondsArray = props.seconds.toString().padStart(6, "0").split("");
    
    return(
        <div className="d-flex justify-content-center text-center mt-5">
            {secondsArray.map((digit, index) => (
                <div key={index} className="digit-box">{digit}</div>
            ))}
        </div>
    );
}

export default SecondsCounter;

