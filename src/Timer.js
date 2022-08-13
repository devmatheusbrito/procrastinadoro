import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import PlayButton from './PlayButton'
import PauseButton from './PauseButton';
import ConfigButton from './ConfigButton';

const red = '#f54e4e'
const green = '#4aec8c'

function Timer() {
  return (
    <div>
      <CircularProgressbar 
      value={60}
      text={'60%'}
      styles={buildStyles({
        strokeLinecap:'round',
        transition: 'stroke-dashoffset 0.5s ease 0s',
        transform: 'rotate(0.25turn)',
        transformOrigin: 'center center',
        textColor: '#fff',
        pathColor:red,
        tailColor:'rgba(255,255,255.2)',
      })}/>
      <div style={{marginTop:'1.25rem'}}>
        <PlayButton />
        <PauseButton />
      </div>
      <div style={{marginTop:'1.25rem'}}>
        <ConfigButton />
      </div>
    </div>
  )
}

export default Timer;