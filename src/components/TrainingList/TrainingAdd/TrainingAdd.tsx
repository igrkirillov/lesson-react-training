import styles from "./training-add.module.css"
import {Item} from "../../../App";
import {FormEvent} from "react";
import {parseDate} from "../../../dateUtils";

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
                <input type="text" id="date-input" className={styles["date-input"]} required={true} pattern="[\d]{1,2}\.[\d]{1,2}\.[\d]{4}"/>
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