import { useEffect, useState } from 'react'
import { StopWatchButton } from '../StopWatchButton/StopWatchButton';
import style from '../StopWatch.module.scss'

export function StopWatchTimer({timer, isRunning, setTimer}){



    useEffect(() => {
        let interval = 1;
        if (isRunning) {
            interval = setInterval (() => {
                setTimer(prevTimer => prevTimer + 1);
            }, 1000);
            
        } else if (!isRunning) {
            clearInterval(interval);
        }
        return() => clearInterval(interval);
    }, [isRunning, timer, setTimer]);

    return(
        <>
        <div className={style.timerDisplay}>
            <h2>{timer}s</h2>
        </div>
        </>
    );
}