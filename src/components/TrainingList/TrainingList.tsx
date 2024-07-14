import React from 'react';
import {TrainingAdd} from "./TrainingAdd";
import styles from "./training-list.module.css"
import {TrainingItem} from "./TrainingItem";

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
                <div className={styles.content}>
                    <TrainingItem date={"20.07.2019"} distance={5.7}></TrainingItem>
                    <TrainingItem date={"19.07.2019"} distance={14.2}></TrainingItem>
                    <TrainingItem date={"18.07.2019"} distance={3.4}></TrainingItem>
                </div>
            </div>
        </>
    );
}