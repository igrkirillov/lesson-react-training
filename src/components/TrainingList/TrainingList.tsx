import {TrainingAdd} from "./TrainingAdd";
import styles from "./training-list.module.css"
import {TrainingItem} from "./TrainingItem";
import {Item} from "../../App";

export type TrainingListProps = {
    items: Item[]
    addItem: (item: Item) => void
}

export function TrainingList(props: TrainingListProps) {
    return (
        <>
            <TrainingAdd addItem={props.addItem}></TrainingAdd>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span>Дата (ДД.ММ.ГГ)</span>
                    <span>Пройдено км</span>
                    <span>Действия</span>
                </div>
                <div className={styles.content}>
                    {props.items.map(item => <TrainingItem date={item.date} distance={item.distance}></TrainingItem>)}
                </div>
            </div>
        </>
    );
}