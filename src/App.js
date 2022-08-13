import './App.css';
import Config from './Config';
import Timer from './Timer';

import { useState } from 'react'
import ConfigContext from './ConfigContext';

function App() {

  const [showConfig, setShowConfig] = useState(false)
  const [workMinutes, setWorkMinutes] = useState(45)
  const [breakMinutes, setBreakMinutes] = useState(15)

  return (  
    <main>
      <ConfigContext.Provider value={{
        showConfig,
        setShowConfig,
        workMinutes,
        setWorkMinutes,
        breakMinutes,
        setBreakMinutes,

      }}>
        {showConfig ? <Config /> : <Timer /> }
      </ConfigContext.Provider>
      
    </main>
  );
}

export default App;
