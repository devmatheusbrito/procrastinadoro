import ReactSlider from "react-slider";
import './slider.css'
import ConfigContext from './ConfigContext'
import { useContext } from 'react';

function Config() {

  const contextInfo = useContext(ConfigContext);

  return(
    <div style={{textAlign:'left'}}>
      <label>Trabalho:</label>
      <ReactSlider 
      className={'slider'}
      thumbClassName={'thumb'}
      trackClassName={'track'}
      value={contextInfo.workMinutes}
      min={1}
      max={120}
      />

      <label>Pausa minutos:</label>
      <ReactSlider 
      className={'slider green'}
      thumbClassName={'thumb'}
      trackClassName={'track'}
      value={45}
      min={1}
      max={120}

      />
    </div>
  )
}

export default Config;