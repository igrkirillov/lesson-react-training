import styles from "./training-item.module.css"
import editIcon from "./icons/edit.png"
import removeIcon from "./icons/remove.png"
import {dateToStr} from "../../../dateUtils";

export type TrainingItemProps = {
    date: Date,
    distance: number
}

export function TrainingItem(props: TrainingItemProps) {
    const {date, distance} = props;
    return (
        <div className={styles.container}>
            <span>{dateToStr(date)}</span>
            <span>{distance}</span>
            <div>
                <a href="#" className={styles.action}>
                    <img src={editIcon} className={styles.icon}/>
                </a>
                <a href="#" className={styles.action}>
                    <img src={removeIcon} className={styles.icon}/>
                </a>
            </div>
        </div>
    );
}