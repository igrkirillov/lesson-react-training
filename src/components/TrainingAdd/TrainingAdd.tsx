import styles from "./training-add.module.css"
import {Item} from "../../App";
import {FormEvent} from "react";
import {parseDate} from "../../dateUtils";

export type TrainingAddProps = {
    addItem: (item: Item) => void
}

export function TrainingAdd(props: TrainingAddProps) {
    const onSubmit =  function (event: FormEvent) {
        event.preventDefault();
        const form: HTMLFormElement = event.target as HTMLFormElement;
        const item: Item = {
            date: parseDate((form[0] as HTMLInputElement).value),
            distance: +((form[1] as HTMLInputElement).value)
        };
        props.addItem(item);
        form.reset();
    }
    return (
        <form className={styles.container} onSubmit={onSubmit}>
            <div className={styles["date-container"]}>
                <label form="date-input">Дата (ДД.ММ.ГГГГ)</label>
                <input type="text" id="date-input" className={styles["date-input"]} required={true} pattern="^(?:(?:31(\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"/>
            </div>
            <div className={styles["distance-container"]}>
                <label form="distance-input">Пройдено км</label>
                <input type="number" id="distance-input" className={styles["distance-input"]} required={true}/>
            </div>
            <div className={styles["add-button-container"]}>
                <input type="submit" value="Добавить" className={styles["add-button"]}/>
            </div>
        </form>
    );
}