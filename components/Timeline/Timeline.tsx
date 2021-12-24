import styles from './Timeline.module.css';
import { Tile } from '../TimelineTile/Tile';
import React from 'react';

const items = [ 'Concepção', 'Planejamento', 'Execução', 'Encerramento' ];

export const Timeline = () => {

	const [activeIndex, setActiveIndex] = React.useState<number>(0);

    const handleActiveIndex = (index:number) => {
        setActiveIndex(index);
        console.log(activeIndex);
    };
    
	const mappedItems = items.map((item, index) => {
        
		const step = index + 1;

        const handlePosition = () => {
            if (step === 1) return 'start'
            if (step !== 1 && step !== items.length) return 'middle'
            if (step === items.length) return 'end'
        }

        return (
            <Tile
                key={index}
                handleClick={() => handleActiveIndex(index)}
                position={handlePosition()}
                title={`${step}. ${item}`}
                isActive={activeIndex === index ? true : false}
            />
        );
	});

	return (
		<div className={styles.timeline}>
			<div className={styles.projectLifecycle}>
				<span style={{ fontWeight: 600 }}>Ciclo de Vida do Projeto</span>
				<span>Atualizado em 08/12/20</span>
			</div>
			{mappedItems}
		</div>
	);
};
