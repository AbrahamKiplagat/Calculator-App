import React, { useState } from 'react';


const AddNum = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [showPrompt, setShowPrompt] = useState(true);

  const handleAdd = () => {
    const sum = num1 + num2;
    setResult(sum);

    // Check if the result is more than 50 and display an alert
    if (sum > 50) {
      alert('Result is more than 50!');
    }
  };

  const resetPrompt = () => {
    setShowPrompt(true);
    setNum1(0);
    setNum2(0);
  };

  return (
    <div className="add-num-container">
      {showPrompt ? (
        <div className="prompt">
          <p>Enter two numbers:</p>
          <div className="input-container">
            <input
              type="number"
              value={num1}
              onChange={(e) => setNum1(parseInt(e.target.value))}
            />
            <input
              type="number"
              value={num2}
              onChange={(e) => setNum2(parseInt(e.target.value))}
            />
          </div>
          <button className='button' onClick={() => setShowPrompt(false)}>OK</button>
        </div>
      ) : (
        <>
          <button className='button' onClick={resetPrompt}>Enter Numbers Again</button>
          <button className='button' onClick={handleAdd}>Add Numbers</button>
          <p>Result: {result}</p>
        </>
      )}
    </div> 
  );
};

export default AddNum;
/***
 *  
*  conditional rendering:
*
*  return(<div> </div>)
*  return (
*  <div></div>)//////////////////using if else///////////////////////
*  const[display, setdisplay] = usestate (false);
*  let output;
*  if(display){
*  output=<h3> condition is true</h3>
*  }
*  else{
*  output=<h3>condition is false</h3>}
*  return <div>{output}</div> 
*
 * Tertiary condition:
 * 
 * const [Display, SetDisplay] = useState(false);
 * Display? *   :
 * Display ? <div><h3>message</h3></div>  : 
 *  <div><h3>message2 </h3> </div>  :
 *  <div><h3>message3</h3></div>
 * 
 * 
 * Map Method in react
 * 
 * let prices= [100,200,300,400]
 * prices.map()
 * let newprice = prices.map((price)=>price * 15/100)
 * console.log(newprice)
 * 
 * component..
 *  const items = ["phone", "laptop", "book", "calculator"];
 * items.map((item)) => ({
 * ________________
 * __________________
 * })
 * for (let i ;i<items; i++){
 * }
 * blog app:
 * add blog using a form
 * deletethe blog..
 * consume an api
 */
