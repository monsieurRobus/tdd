
import { useState } from 'react';
import './App.css';



 

function App() {
  const [disabled, setDisabled] = useState(false)
  const [clicked, setClicked] = useState(false)
  const handleClick = (e) => {
    

    clicked ? e.target.style.backgroundColor = 'red' : e.target.style.backgroundColor = 'blue'
    clicked ? e.target.innerHTML = 'Change to Blue' : e.target.innerHTML = 'Change to Red'
    clicked ? setClicked(false) : setClicked(true)
    
    
  }
  
  return (
    <div>
        {
          clicked?
          <button style={disabled?{backgroundColor: 'gray'}:{backgroundColor: 'blue'}}  onClick={handleClick} disabled={disabled}>Change to Red</button>:
          <button style={disabled?{backgroundColor: 'gray'}:{backgroundColor: 'red'}}  onClick={handleClick} disabled={disabled}>Change to Blue</button>
          
          }
        <input type='checkbox' onChange={(e)=>setDisabled(e.target.checked)} />
    </div>
  );
}

export default App;
