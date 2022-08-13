import ReactSlider from "react-slider";
import './slider.css'
import ConfigContext from './ConfigContext'
import { useContext } from 'react';
import BackButton from "./BackButton";

function Config() {

  const contextInfo = useContext(ConfigContext);
  
  return(
    <div style={{textAlign:'left'}}>
      <label>Work: {contextInfo.workMinutes}:00</label>
      <ReactSlider 
      className={'slider'}
      thumbClassName={'thumb'}
      trackClassName={'track'}
      value={contextInfo.workMinutes}
      onChange={newValue => contextInfo.setWorkMinutes(newValue)}
      min={1}
      max={120}
      />

      <label>Break: {contextInfo.breakMinutes}:00</label>
      <ReactSlider 
      className={'slider green'}
      thumbClassName={'thumb'}
      trackClassName={'track'}
      value={contextInfo.breakMinutes}
      onChange={newValue => contextInfo.setBreakMinutes(newValue)}
      min={1}
      max={120}
      />
      <div style={{textAlign: 'center', marginTop: '1.25rem'}}>
        <BackButton onClick={() => contextInfo.setShowConfig(false)}/>
      </div>
    </div>
  )
}

export default Config;