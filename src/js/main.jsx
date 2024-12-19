import React from 'react'
import ReactDOM from 'react-dom/client'
import SimpleCounter from './components/SimpleCounter.jsx'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
  let counter=0;
  
  setInterval(()=>{
    
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
      </React.StrictMode>,
    )
  },1000)

