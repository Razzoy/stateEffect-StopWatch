import style from '../StopWatch/StopWatch.module.scss'

export function StopWatch({children}){
    return(
        <>
        <div className={style.containerWatch}>
            {children}
        </div>
        </>
    )
}