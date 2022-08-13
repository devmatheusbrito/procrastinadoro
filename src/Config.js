import ReactSlider from "react-slider";
import './slider.css'
import ConfigContext from './ConfigContext'
import { useContext } from 'react';

function Config() {

  const contextInfo = useContext(ConfigContext);

  return(
    <div style={{textAlign:'left'}}>
      <label>{contextInfo.trabalhoMinutes}:00</label>
      <ReactSlider 
      className={'slider'}
      thumbClassName={'thumb'}
      trackClassName={'track'}
      value={contextInfo.trabalhoMinutes}
      min={1}
      max={120}
      />

      <label>{contextInfo.pausaMinutes}:00</label>
      <ReactSlider 
      className={'slider green'}
      thumbClassName={'thumb'}
      trackClassName={'track'}
      value={contextInfo.pausaMinutes}
      min={1}
      max={120}

      />
    </div>
  )
}

export default Config;