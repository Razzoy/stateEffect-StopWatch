// import { useState } from 'react'
import { StopWatch } from "./components/StopWatch/StopWatch"
import { StopWatchHeader } from "./components/StopWatch/StopWatchHeader/StopWatchHeader"
import { StopWatchButton } from "./components/StopWatch/StopWatchButton/StopWatchButton"
import { StopWatchTimer } from "./components/StopWatch/StopWatchTimer/StopWatchTimer"
import style from './components/StopWatch/StopWatch.module.scss'

function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startWatch = () => setIsRunning(true);
  const stopWatch = () => setIsRunning(false);
  const resetWatch = () => {
      setIsRunning(false);
      setTimer(0);
  }

  return (
    <>
      <StopWatch>
        <StopWatchHeader></StopWatchHeader>
        <StopWatchTimer timer={timer} isRunning={isRunning} setTimer={setTimer}></StopWatchTimer>
        <div className={style.startStopButtons}>
          <StopWatchButton name='Start' action='start'></StopWatchButton>
          <StopWatchButton name='Stop' action='stop'></StopWatchButton>
        </div>
        <StopWatchButton name='Reset' action='reset'></StopWatchButton>
      </StopWatch>
    </>
  )
}

export default App
