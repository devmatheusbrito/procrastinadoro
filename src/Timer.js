import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import PlayButton from './PlayButton'
import PauseButton from './PauseButton';
import ConfigButton from './ConfigButton';
import { useContext, useState, useEffect, useRef } from 'react'
import ConfigContext from './ConfigContext';

const red = '#f54e4e'
const green = '#4aec8c'

function Timer() {
  const contextInfo = useContext(ConfigContext)
  
  const [isPaused, setIsPaused] = useState(true)
  const [mode, setMode] = useState('work')
  const [secondsLeft, setSecondsLeft] = useState(0)

  const secondsLeftRef = useRef(secondsLeft)
  const isPausedRef = useRef(isPaused)
  const modeRef = useRef(mode)

  
  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work'
      const nextSeconds = (nextMode === 'work' ? contextInfo.workMinutes  : contextInfo.breakMinutes ) * 60
      
      setMode(nextMode)
      modeRef.current = nextMode
  
      setSecondsLeft(nextSeconds)
      secondsLeftRef.current = nextSeconds
    }

    const intervalID = setInterval(() => {
      if(isPausedRef.current){
        return;
      }
      if(secondsLeftRef.current === 0 ){
        return switchMode()
      }

      tick()
    }, 10)

    return () => clearInterval(intervalID)

  },[contextInfo])

  const totalSeconds = mode === 'work'
    ? contextInfo.workMinutes * 60
    : contextInfo.breakMinutes * 60;
  const percentage = Math.round(secondsLeft / totalSeconds * 100);

  let minutes = Math.floor(secondsLeft / 60);
  if(minutes < 10) minutes = '0' +minutes;
  let seconds = secondsLeft % 60;
  if(seconds < 10) seconds = '0' +seconds;

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={minutes + ':' + seconds}
        styles={buildStyles({
        textColor:'#fff',
        pathColor:mode === 'work' ? green : red,
        tailColor:'rgba(255,255,255,.2)',
      })} />
      <div style={{marginTop:'1.25rem'}}>
        {isPaused 
        ? <PlayButton onClick={() => {setIsPaused(false); isPausedRef.current = false }} /> 
        : <PauseButton onClick={() => { setIsPaused(true); isPausedRef.current = true; }} />}
      </div>
      <div style={{marginTop:'1.25rem'}}>
        <ConfigButton onClick={() => contextInfo.setShowConfig(true)}/>
      </div>
    </div>
  )
}

export default Timer;