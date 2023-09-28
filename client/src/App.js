import './App.css';
import TableView from './layouts/tableView/TableView';
import FormNewItems from './layouts/formNewItems/FormNewItems';
import React, {useState} from 'react';

const App = () => {
  
  const [items, setItems] = useState([
    {id:1, fullName:"ФИО 1", telephone:"Телефон 10", notes:"Заметки"},
    {id:2, fullName:"ФИО 2", telephone:"Телефон 10", notes:"Заметки"},
    {id:3, fullName:"ФИО 3", telephone:"Телефон 10", notes:"Заметки"},
    {id:4, fullName:"ФИО 4", telephone:"Телефон 10", notes:"Заметки"},
    {id:5, fullName:"ФИО 5", telephone:"Телефон 10", notes:"Заметки"},
  ]); 

  const appendContact = (fullName, telephone, notes) => {
    const length = items.length;
    let currentId = 0;

    if(length === 0){
      currentId = 1;
    } else {
      currentId = items[length - 1].id + 1;
    }
    
    const temp = {id: currentId, fullName: fullName, telephone: telephone, notes: notes}
    setItems([...items, temp]);
  }

  const removeContact = (id) => {
    setItems(items.filter(item => item.id != id));
  }

  return (
    <div className = 'container mt-5'>
      <div className = 'card'>
        <div className = 'card-header'>
          <h1>Список контактов</h1>
        </div>
        <div className = 'card-body'>
          <TableView data = {items} removeContact = {removeContact}/>
          <FormNewItems appendContact = {appendContact}/>
        </div>
      </div>
    </div>
  );
}

export default App;
