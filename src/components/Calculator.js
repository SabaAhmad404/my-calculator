import React from "react";
import { useState } from "react";
export default function Calculator(){
  const[weight, setWeight]=useState('')
  const [height ,setHeight] = useState('');
  const [bmi, setBMI]=useState(''); 

  const handleBMI=()=>{
    const bmiValue = weight / height^2;
    setBMI(bmiValue)
  }


    return(
        <>
        <div className="cal-sec">
            <h2>BMI Calcultor</h2>
            <div className="input-fields">
            <label>
             weight:
             <input type="number" id="weight" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
            </label>
            <br/>
            <label>
                Height:
                <input type="number" id="height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
            </label>
            </div>
            <br/>
            <button className="calculate-button" onClick={handleBMI}>Calculate BMI</button>

            <br/>
            {bmi &&  <p className="bmi-value">your bmi value is :{bmi}</p> }
           
          

        </div>
        
        
        </>
    )
}