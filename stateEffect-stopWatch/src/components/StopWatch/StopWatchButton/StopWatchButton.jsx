import style from '../StopWatch.module.scss'

export function StopWatchButton({name, onClick}){
    return(

        <button className={style.button} onClick={onClick}>
            {name}
        </button>

    )
}