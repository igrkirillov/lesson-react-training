import React from 'react';
import {TrainingAdd} from "./TrainingAdd";
import styles from "./training-list.module.css"

export function TrainingList(props) {
    return (
        <>
            <TrainingAdd></TrainingAdd>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span>Дата (ДД.ММ.ГГ)</span>
                    <span>Пройдено км</span>
                    <span>Действия</span>
                </div>
            </div>
        </>
    );
}