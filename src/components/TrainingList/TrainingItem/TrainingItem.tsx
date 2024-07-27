import styles from "./training-item.module.css"
import editIcon from "./icons/edit.png"
import removeIcon from "./icons/remove.png"
import {dateToStr} from "../../../dateUtils";
import {Item} from "../../../App";
import {MouseEvent} from "react";

export type TrainingItemProps = {
    item: Item
    editItem: (item: Item) => void,
    deleteItem: (item: Item) => void
}

export function TrainingItem(props: TrainingItemProps) {
    const onClickEdit = function (event: MouseEvent): void {
        event.preventDefault();
        props.editItem(props.item);
    }
    const onClickDelete = function (event: MouseEvent): void {
        event.preventDefault();
        props.deleteItem(props.item);
    }
    return (
        <div className={styles.container}>
            <span>{dateToStr(props.item.date)}</span>
            <span>{props.item.distance}</span>
            <div>
                <a href="#" className={styles.action} onClick={onClickEdit}>
                    <img src={editIcon} className={styles.icon}/>
                </a>
                <a href="#" className={styles.action} onClick={onClickDelete}>
                    <img src={removeIcon} className={styles.icon}/>
                </a>
            </div>
        </div>
    );
}