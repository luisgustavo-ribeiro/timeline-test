import React from 'react'
import styles from './Tile.module.css'

interface ITile {
    stage?: string;
    step?: 'new' | 'started' | 'ongoing' | 'completed';
    position?: 'start' | 'middle' | 'end';
    title?: string;
    hasStarted?: boolean;
    isCompleted?:boolean;
    hasMore?: boolean;
    isActive?:boolean;
    handleClick: () => void;
}

export const Tile = (props: ITile) => {

    const activeClass = `${styles.tile} ${styles[`${props.position}`]} ${styles[props.step ? props.step : 'started']} ${styles.active}`
    const inactiveClass = `${styles.tile} ${styles[`${props.position}`]} ${styles[props.step ? props.step : 'started']}`

    return (
        <div className={props.isActive ? activeClass : inactiveClass} onClick={props.handleClick}>
            <span className={styles.stageIndicator}></span>
            <span className={styles.tileTitle}>{props.title}</span>
        </div>
    )
}