import React from 'react';
import styles from './Tile.module.css';
import { CheckmarkRegular } from '@fluentui/react-icons';

interface ITile {
	step?: string;
	status?: 'inactive' | 'active' | 'completed' | string;
	tilePosition?: 'start' | 'middle' | 'end';
	label?: string;
	isActive?: boolean;
	handleClick: () => void;
}

export const Tile = (props: ITile) => {
	const activeClass = `${styles.tile} ${styles[`${props.tilePosition}`]} ${styles[props.status ? props.status : 'inactive']} ${styles.active}`;
	const inactiveClass = `${styles.tile} ${styles[`${props.tilePosition}`]} ${styles[props.status ? props.status : 'inactive']}`;

	return (
		<div className={props.isActive ? activeClass : inactiveClass} onClick={props.handleClick}>
			{props.status === 'completed' ? (
				<span className={styles.stageIndicator}>
					<CheckmarkRegular fontSize={16} />
				</span>
			) : (
				<span className={styles.stageIndicator}></span>
			)}
			<span className={styles.tileTitle}>{props.label}</span>
		</div>
	);
};
