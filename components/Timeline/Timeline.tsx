import styles from './Timeline.module.css';
import { Tile } from '../TimelineTile/Tile';
import React from 'react';

let items = [
	{
        step: 1,
		label: 'Concepção',
		status: 'completed'
	},
	{
        step: 2,
		label: 'Planejamento',
		status: 'completed'
	},
	{
        step: 3,
		label: 'Execução',
		status: 'active'
	},
	{
        step: 4,
		label: 'Encerramento',
		status: 'inactive'
	}
];

export const Timeline = () => {
	const [activeIndex, setActiveIndex] = React.useState<number>(0);

	const handleActiveIndex = (index: number) => {
		setActiveIndex(index);
        changeStatus(index);
	};

    const changeStatus = (activeIndex:number) => {
        items.map(item => {
            if(item.step < (activeIndex + 1)) return item.status = 'completed'
            if(item.step === (activeIndex + 1))  return item.status = 'active'
            if(item.step > (activeIndex + 1)) return item.status = 'inactive'
        });

        console.log(items);
    }

	const mappedItems = items.map((item, index) => {

		const handlePosition = () => {
			if (item.step === 1) return 'start';
			if (item.step !== 1 && item.step !== items.length) return 'middle';
			if (item.step === items.length) return 'end';
		};

		return (
			<Tile
				key={index}
                status={item.status}
				handleClick={() => handleActiveIndex(index)}
				tilePosition={handlePosition()}
				label={`${item.step}. ${item.label}`}
			/>
		);
	});

	return (
		<div className={styles.timeline}>
			<div className={styles.projectLifecycle}>
				<span style={{ fontWeight: 600 }}>Ciclo de Vida do Projeto</span>
				<span>Atualizado em 08/12/20</span>
			</div>
			{ mappedItems }
		</div>
	);
};
