import React from 'react'
import ReactDOM from 'react-dom/client'
import SimpleCounter from './components/SimpleCounter.jsx'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

const resetTimer = () => {
  reset=true;
  console.log(reset);
}



const root = ReactDOM.createRoot(document.getElementById('root'));
  let counter=0;
  let pause=false;
  let reset=false;

  let timer=setInterval(()=>{
   
    if (reset) {
      counter=0;
      reset=false;
    };

    const tenThousandsDigit=Math.floor(counter/10000) % 10
    const thousandsDigit=Math.floor(counter/1000) % 10
    const hundredsDigit=Math.floor(counter/100) % 10
    const tensDigit=Math.floor(counter/10) % 10
    const onesDigit=Math.floor(counter) % 10

    counter++

    console.log(tenThousandsDigit, thousandsDigit, hundredsDigit, tensDigit, onesDigit)

    root.render(
      <React.StrictMode>
        <SimpleCounter first={onesDigit} second={tensDigit} third={hundredsDigit} fourth={thousandsDigit} fifth={tenThousandsDigit}/>
        <div className="buttonRow">
          <button className="start button" onClick="pause=false">Start</button>
          <button className="stop button" onClick="pause=true">Stop</button>
          <button className="reset button" onClick={resetTimer}>Reset</button>
        </div>
      </React.StrictMode>,
    )
  },1000)

