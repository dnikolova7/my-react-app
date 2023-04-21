import React, {useState} from "react";
import "./input.css";

const Input = () => {
    
    const [BG, setBG] = useState(0);
    function updatedBG() {
        const BloodGlucose = 0;
        setBG(BloodGlucose);
    }
    // console.log(updatedBG);
    
return (
    <div>
    <form>
        <input type="text" name="inputBG" id="inputBG" />
    </form>
    </div>
)
};

export default Input;