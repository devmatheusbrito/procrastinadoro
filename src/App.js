import './App.css';
import Config from './Config';
import Timer from './Timer';

import { useState } from 'react'
import ConfigContext from './ConfigContext';

function App() {

  const [showConfig, setShowConfig] = useState(true)

  return (  
    <main>
      <ConfigContext value={{
        workMinutes:45,
        breakMinutes:15,
      }}>
        {showConfig ? <Config /> : <Timer /> }
      </ConfigContext>
      
    </main>
  );
}

export default App;
