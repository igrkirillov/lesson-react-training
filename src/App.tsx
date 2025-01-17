import './App.css'
import {TrainingList} from "./components/TrainingList";
import {useState} from "react";
import {TrainingAdd} from "./components/TrainingAdd";

export type Item = {
  date: Date,
  distance: number
}

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = function(item: Item) {
    const newItems: Item[] = [...items];
    const foundIndex = items.findIndex((value: Item) => value.date.getTime() === item.date.getTime());
    if (foundIndex >= 0) {
      newItems[foundIndex].distance += item.distance;
    } else {
      newItems.push(item);
    }
    const sortedItems = newItems.sort((i1: Item, i2: Item) => {
      const t1 = i1.date.getTime();
      const t2 = i2.date.getTime();
      if (t1 > t2) {
        return -1;
      } else if (t2 > t1) {
        return 1;
      } else {
        return 0;
      }
    });
    setItems(sortedItems);
  }

  const editItem = function(item: Item) {
    const newItems: Item[] = [...items];
    const foundIndex = items.findIndex((value: Item) => value.date.getTime() === item.date.getTime());
    console.log(`newItems ${newItems}`)
    console.log(`foundIndex ${foundIndex}`)
    alert("Редактирование пока не реализовано!\nУдалите и добавьте заново.");
  }

  const deleteItem = function(item: Item) {
    const newItems: Item[] = [...items];
    const foundIndex = items.findIndex((value: Item) => value.date.getTime() === item.date.getTime());
    if (foundIndex >= 0) {
      newItems.splice(foundIndex, 1);
      setItems(newItems);
    }
  }

  return (
      <>
        <TrainingAdd addItem={addItem}></TrainingAdd>
        <TrainingList items={items} addItem={addItem} editItem={editItem} deleteItem={deleteItem}></TrainingList>
      </>
  )
}

export default App
