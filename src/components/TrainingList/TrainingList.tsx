import styles from "./training-list.module.css"
import {TrainingItem} from "./TrainingItem";
import {Item} from "../../App";

export type TrainingListProps = {
    items: Item[]
    addItem: (item: Item) => void,
    editItem: (item: Item) => void,
    deleteItem: (item: Item) => void
}

export function TrainingList(props: TrainingListProps) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span>Дата (ДД.ММ.ГГ)</span>
                <span>Пройдено км</span>
                <span>Действия</span>
            </div>
            <div className={styles.content}>
                {props.items.map(item => <TrainingItem key={item.date.toDateString()} item={item} editItem={props.editItem}
                                                       deleteItem={props.deleteItem}></TrainingItem>)}
            </div>
        </div>
    );
}