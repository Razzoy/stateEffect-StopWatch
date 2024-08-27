import { useEffect, useState } from 'react'
import { StopWatchButton } from '../StopWatchButton/StopWatchButton';
import style from '../StopWatch.module.scss'

export function StopWatchTimer(){



    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval (() => {
                setTimer(prevTimer => prevTimer + 1);
            }, 1000);
        } else if (!isRunning) {
            clearInterval(interval);
        }
        return() => clearInterval(interval);
    }, [isRunning]);





    return(
        <>
        <div>
            <h1>{timer}s</h1>
        </div>
        </>
    )
}